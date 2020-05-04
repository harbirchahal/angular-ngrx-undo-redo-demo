import { Action, ActionReducer, createAction, createReducer, props, on } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AppState } from './app.state';
import { undoable, undo, redo } from './app.actions';
import { historyReducer, history$, History } from './app-history.reducer';

/** Setup */
interface State {
  fuzzy: string[];
}

const initialState: State = {
  fuzzy: [],
};

const anyNonUndoable = createAction(
  'Any Non-Undoable', props<{ payload: string }>());

const anyUndoable = undoable(createAction(
  'Any Undoable', props<{ payload: string }>()));

function mockReducer(state: State, action: Action) {
  const reducer = createReducer(
    initialState,
    on(anyNonUndoable,
      anyUndoable, (state, { payload }) => ({
        fuzzy: [...state.fuzzy, payload]
      })),
  );
  return reducer(state, action);
}

function assertHistory(expected: History, done: Function) {
  history$.pipe(take(1)).subscribe(history => {
    expect(history).toEqual(expected);
    done();
  });
}

/** Spec */
describe('HistoryReducer', () => {
  let mockHistoryReducer: ActionReducer<AppState>;

  beforeEach(() => {
    mockHistoryReducer = historyReducer(mockReducer);
  });

  it('should init history', (done) => {
    const expected = { past: [], present: {}, future: [] };

    assertHistory(expected, done);
  });

  describe('non-undoable action', () => {
    it('should not update history', (done) => {
      const expected = { past: [], present: {}, future: [] };
      const newState = mockHistoryReducer(
        initialState, anyNonUndoable({ payload: 'Lorem' }));

      expect(newState).toEqual({ fuzzy: ['Lorem'] });
      assertHistory(expected, done);
    });
  });

  describe('undoable action', () => {
    it('should update history', (done) => {
      const expected = { past: [{}], present: { fuzzy: ['Lorem'] }, future: [] };
      const newState = mockHistoryReducer(
        initialState, anyUndoable({ payload: 'Lorem' }));

      expect(newState).toEqual(expected.present);
      assertHistory(expected, done);
    });
  });

  describe('undo action', () => {
    beforeEach(() => {
      mockHistoryReducer(initialState, anyUndoable({ payload: 'Lorem' }));
      // history = { past: [{}], present: { fuzzy: ['Lorem'] }, future: [] }
    });

    it('should undo history', (done) => {
      const expected = { past: [], present: {}, future: [{ fuzzy: ['Lorem'] }] };
      const newState = mockHistoryReducer(initialState, undo());

      expect(newState).toEqual(expected.present);
      assertHistory(expected, done);
    });
  });

  describe('redo action', () => {
    beforeEach(() => {
      mockHistoryReducer(initialState, anyUndoable({ payload: 'Lorem' }));
      mockHistoryReducer(initialState, undo());
      // history = { past: [], present: {}, future: [{ fuzzy: ['Lorem'] }] }
    });

    it('should redo history', (done) => {
      const expected = { past: [{}], present: { fuzzy: ['Lorem'] }, future: [] };
      const newState = mockHistoryReducer(initialState, redo());

      expect(newState).toEqual(expected.present);
      assertHistory(expected, done);
    });
  });

});
