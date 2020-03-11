import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { TodoState } from './todo.state';
import { addTitle, addTodo } from './todo.actions';
import { selectTodoTotal } from './todo.selector';

@Injectable()
export class TodoEffects {

  readonly addTitle$ = createEffect(() => this.actions$.pipe(
    ofType(addTitle), map(action => action.title),
    withLatestFrom(this.store.select(selectTodoTotal)),
    map(([title, total]) => addTodo({ todo: {
      id: total + 1,
      title,
      completed: false
    }}))
  ));

  constructor(
    private actions$: Actions,
    private store: Store<TodoState>
  ) { }
}
