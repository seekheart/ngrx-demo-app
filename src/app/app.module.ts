import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from '@ngrx/effects';
import {CurrencyEffects} from "./effects/currencyEffects";
import {CurrencyService} from "./services/currency.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CurrencyEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
