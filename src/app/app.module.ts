import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared';
import { AppStoreModule } from './store';
import { TodosModule } from './+todos'; // Feature
import { AppComponent } from './app.component';
import { UndoRedoComponent, HistoryComponent, ExtractTodosPipe } from './components';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppStoreModule,
    TodosModule,
  ],
  declarations: [
    AppComponent,
    UndoRedoComponent,
    HistoryComponent,
    ExtractTodosPipe,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
