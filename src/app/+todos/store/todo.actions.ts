import { createAction, props } from '@ngrx/store';
import { Todo } from '../model';

export const addTitle = createAction(
  '[Todos] Add Title',
  props<{title: string}>()
);

export const addTodo = createAction(
  '[Todos] Add Todo',
  props<{todo: Todo}>()
);

export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{todo: Todo}>()
);

export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  props<{todo: Todo}>()
);
