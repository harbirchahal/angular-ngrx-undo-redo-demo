import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../shared';
import { TodosComponent } from './todos.component';
import { TodoInputComponent, TodoListComponent } from './components';
import { FEATURE_KEY, TodoEffects, todoReducer } from './store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature(FEATURE_KEY, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  declarations: [
    TodosComponent,
    TodoInputComponent,
    TodoListComponent,
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
