import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './shared';
import { TodosModule } from './+todos';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    TodosModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
