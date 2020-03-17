import { createAction, Action } from '@ngrx/store';

export interface Undoable extends Action {
  readonly undoable: boolean;
}

export function undoable<T extends object>() {
  return function (props: object): any {
    return {
      ...props,
      undoable: true
    };
  }
}

export const undo = createAction('Undo Action');

export const redo = createAction('Redo Action');
