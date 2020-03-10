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

  @Output() toggle = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  toggleTodo(todo: Todo) {
    this.toggle.emit(todo);
  }

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }

}
