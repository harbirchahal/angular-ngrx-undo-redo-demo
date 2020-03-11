import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Todo } from '../../model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() todos: Todo[];

  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<Todo>();

  constructor() { }

  updateTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.update.emit(todo);
  }

  deleteTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
