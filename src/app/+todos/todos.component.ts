import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.css' ]
})
export class TodosComponent  {
  todos: Todo[] = [
    { id: 1, title: 'Lorem', completed: false },
    { id: 2, title: 'Ipsum', completed: true }
  ];

  constructor() { }

  addTitle(title: string) {
  }

  toggleTodo(todo: Todo) {
  }

  deleteTodo(todo: Todo) {
  }
}
