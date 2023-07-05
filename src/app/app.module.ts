import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TextComponent} from './text/text.component';
import {Kapitel1Component} from './text/kapitel1/kapitel1.component';
import {Kapitel2Component} from './text/kapitel2/kapitel2.component';
import {HauptcharComponent} from './hauptcharakter/hauptchar.component';
import {PrologComponent} from "./text/kapitel0.5_prolog/prolog.component";
import { RubicsCubeComponent } from './rubics-cube/rubics-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    PrologComponent,
    Kapitel1Component,
    Kapitel2Component,
    HauptcharComponent,
    RubicsCubeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [HauptcharComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
