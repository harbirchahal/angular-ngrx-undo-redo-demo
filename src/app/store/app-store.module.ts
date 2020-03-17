import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { initialState } from './app.state';
import { reducerMap } from './app.reducer';
import { historyReducer } from './app-history.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(reducerMap, {
      initialState,
      metaReducers: [historyReducer],
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule { }
