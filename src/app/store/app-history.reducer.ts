import { ActionReducer, Action, INIT } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { cloneDeep } from 'lodash';

import { Undoable, undo, redo } from './app.actions';
import { AppState } from './app.state';

export interface History {
  past: AppState[];
  present: AppState;
  future: AppState[];
}

const historySub = new BehaviorSubject<History>({
  past: [],
  present: null,
  future: []
});

export const history$: Observable<History> = historySub.asObservable();

export function historyReducer(reducer: ActionReducer<AppState>) {
  historySub.next({
    past: [],
    present: reducer({}, { type: INIT }),
    future: []
  });
  return function (state: AppState, action: Action) {
    const { past, present, future } = historySub.value;

    switch (action.type) {
      case undo.type: {
        if (!past.length) {
          return state;
        }
        // use first past state as next present
        const previous = past[0];
        // ... and remove from past
        const newPast = past.slice(1);
        historySub.next({
          past: newPast,
          present: cloneDeep(previous),
          // push present into future for redo
          future: [present, ...future]
        });
        return previous;
      }
      case redo.type: {
        if (!future.length) {
          return state;
        }
        // use first future state as next present
        const next = future[0];
        // ... and remove from future
        const newFuture = future.slice(1);
        historySub.next({
          // push present into past for undo
          past: [present, ...past],
          present: cloneDeep(next),
          future: newFuture
        });
        return next;
      }
      default: {
        // derive next state
        const newPresent = reducer(state, action);
        if (present === newPresent) {
          return state;
        }
        // update undoable history
        if ((action as Undoable).undoable) {
          historySub.next({
            // push previous present into past for undo
            past: [present, ...past],
            present: cloneDeep(newPresent),
            future: [] // clear future
          });
        }
        return newPresent;
      }
    }
  }
}
