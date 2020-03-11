import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../model';
import { addTodo, toggleTodo, deleteTodo } from './todo.actions';
import { initialState, todoAdapter, TodoState } from './todo.state';

const reducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    return todoAdapter.addOne(todo, state);
  }),
  on(toggleTodo, (state, { todo }) => {
    const sTodo = state.entities[todo.id];
    const uTodo = {
      ...sTodo,
      completed: !sTodo.completed
    };
    return todoAdapter.updateOne(uTodo, state);
  }),
  on(deleteTodo, (state, { todo }) => {
    return todoAdapter.removeOne(todo.id, state);
  }),
);

export function todoReducer(state: TodoState, action: Action) {
  return reducer(state, action);
}
