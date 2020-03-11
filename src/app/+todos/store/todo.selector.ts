import { createSelector, createFeatureSelector } from '@ngrx/store';
import { todoAdapter, TodoState, FEATURE_KEY } from './todo.state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = todoAdapter.getSelectors();

const selectTodoState = createFeatureSelector<TodoState>(FEATURE_KEY);

export const selectTodoIds = createSelector(
  selectTodoState,
  selectIds
);
export const selectTodoEntities = createSelector(
  selectTodoState,
  selectEntities
);
export const selectAllTodos = createSelector(
  selectTodoState,
  selectAll
);

export const selectTodoTotal = createSelector(
  selectTodoState,
  selectTotal
);
