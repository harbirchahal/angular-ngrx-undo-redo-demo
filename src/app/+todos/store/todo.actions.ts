import { createAction, props } from '@ngrx/store';
import { undoable } from '../../store';
import { Todo } from '../model';

export const addTitle = createAction(
  '[Todos] Add Title',
  props<{title: string}>()
);

export const addTodo = undoable(createAction(
  '[Todos] Add Todo',
  props<{todo: Todo}>()
));

export const updateTodo = undoable(createAction(
  '[Todos] Update Todo',
  props<{todo: Todo}>()
));

export const deleteTodo = undoable(createAction(
  '[Todos] Delete Todo',
  props<{todo: Todo}>()
));
