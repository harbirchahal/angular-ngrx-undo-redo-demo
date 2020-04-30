import { createReducer, on, Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Todo } from '../model';
import { addTodo, updateTodo, deleteTodo } from './todo.actions';
import { initialState, todoAdapter, TodoState } from './todo.state';

const reducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    return todoAdapter.addOne(todo, state);
  }),
  on(updateTodo, (state, { todo }) => {
    const update: Update<Todo> = {
      id: todo.id,
      changes: { completed: todo.completed }
    };
    return todoAdapter.updateOne(update, state);
  }),
  on(deleteTodo, (state, { todo }) => {
    return todoAdapter.removeOne(todo.id, state);
  }),
);

export function todoReducer(state: TodoState, action: Action) {
  return reducer(state, action);
}
