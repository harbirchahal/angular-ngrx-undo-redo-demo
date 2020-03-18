import { createAction, Action, ActionCreator } from '@ngrx/store';

export interface Undoable extends Action {
  readonly undoable: boolean;
}

export function undoable(creator: ActionCreator) {
  const newCreator = (props?: object) => ({
    ...creator(props),
    undoable: true
  });
  return Object.defineProperty(newCreator, 'type', {
    value: creator.type,
    writable: false
  });
}

export const undo = createAction('Undo Action');

export const redo = createAction('Redo Action');
