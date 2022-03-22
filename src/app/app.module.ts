import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { FretComponent } from './fret/fret.component';
import { ToneComponent } from './tone/tone.component';
import { StringComponent } from './string/string.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FretboardComponent,
    FretComponent,
    ToneComponent,
    StringComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
