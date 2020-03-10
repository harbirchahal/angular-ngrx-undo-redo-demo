import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared';
import { TodosComponent } from './todos.component';
import { TodoInputComponent, TodoListComponent } from './components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    TodosComponent,
    TodoInputComponent,
    TodoListComponent,
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
