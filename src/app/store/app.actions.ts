import { createAction, Action } from '@ngrx/store';

export interface Undoable extends Action {
  undoable: boolean;
}

export const undo = createAction('Undo Action');

export const redo = createAction('Redo Action');
