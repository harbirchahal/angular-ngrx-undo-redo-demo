import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './model';
import * as todoStore from './store';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.css' ]
})
export class TodosComponent  {
  todos$: Observable<Todo[]> = this.store.select(todoStore.selectAllTodos);

  constructor(private store: Store<todoStore.TodoState>) { }

  addTitle(title: string) {
    this.store.dispatch(todoStore.addTitle({ title }));
  }

  updateTodo(todo: Todo) {
    this.store.dispatch(todoStore.updateTodo({ todo }));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(todoStore.deleteTodo({ todo }));
  }
}
