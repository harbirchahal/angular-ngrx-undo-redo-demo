import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from './app.state';
import { history$ } from './app-history.reducer';

@Injectable()
export class AppFacade {
  readonly canUndo$: Observable<boolean> = history$.pipe(
    map(history => !!history.past.length));

  readonly canRedo$: Observable<boolean> = history$.pipe(
    map(history => !!history.future.length));

  constructor(private store: Store<AppState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
