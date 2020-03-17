import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared';
import { AppStoreModule } from './store';
import { TodosModule } from './+todos'; // Feature
import { AppComponent } from './app.component';
import { UndoRedoComponent } from './components/undo-redo/undo-redo.component';

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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
