import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { addTitle, addTodo } from './todo.actions';

@Injectable()
export class TodoEffects {

  readonly addTitle$ = createEffect(() => this.actions$.pipe(
    ofType(addTitle),
    map(({ title }) => addTodo({ todo: {
      id: 99,
      title,
      completed: false
    }}))
  ));

  constructor(
    private actions$: Actions,
  ) { }
}
