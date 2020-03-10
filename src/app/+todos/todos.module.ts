import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared';
import { TodosComponent } from './todos.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TodosComponent,
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
