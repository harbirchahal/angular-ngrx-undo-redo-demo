import { ActionReducer, Action, INIT } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { Undoable } from './app.actions';
import { AppState } from './app.state';

export interface History {
  past: AppState[];
  present: AppState;
  future: AppState[];
}

const initHistory = {
  past: [],
  present: null,
  future: []
}

const historySub = new BehaviorSubject<History>(initHistory);

export const history$: Observable<History> = historySub.asObservable();

export function historyReducer(reducer: ActionReducer<AppState>) {
  historySub.next({
    past: [],
    present: reducer({}, { type: INIT }),
    future: []
  });
  return function (state: AppState, action: Action) {
    switch (action.type) {
      default: {
        const newState = reducer(state, action);

        if ((action as Undoable).undoable) {
          const history = historySub.value;
          historySub.next({
            past: [history.present, ...history.past],
            present: newState,
            future: []
          });
        }

        return newState;
      }
    }
  }
}
