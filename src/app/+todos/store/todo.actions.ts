import { createAction, props } from '@ngrx/store';
import { undoable } from '@app/store';
import { Todo } from '../model';

export const addTitle = createAction(
  '[Todos] Add Title',
  props<{title: string}>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  undoable<{todo: Todo}>()
);

export const updateTodo = createAction(
  '[Todos] Update Todo',
  undoable<{todo: Todo}>()
);

export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  undoable<{todo: Todo}>()
);
