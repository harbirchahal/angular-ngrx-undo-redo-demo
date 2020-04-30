import { createFeatureSelector } from '@ngrx/store';
import { todoAdapter, TodoState, FEATURE_KEY } from './todo.state';

const selectTodoState =
  createFeatureSelector<TodoState>(FEATURE_KEY);

export const {
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTodoTotal,
} = todoAdapter.getSelectors(selectTodoState);
