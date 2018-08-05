import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { AppComponent } from './app.component';
import { PigLatinHistoryComponent } from './feature/pig-latin/component/pig-latin-history/pig-latin-history.component';
import { PigLatinComponent } from './feature/pig-latin/component/pig-latin/pig-latin.component';


@NgModule({
  declarations: [
    AppComponent,
    PigLatinHistoryComponent,
    PigLatinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
