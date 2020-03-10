import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {
  title: string = '';

  @Output() add = new EventEmitter<string>();

  constructor() { }

  addTitle() {
    const title = this.title.trim();
    if (title) {
      this.add.emit(title);
    }
  }

}
