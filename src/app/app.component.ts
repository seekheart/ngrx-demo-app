import {Component, OnInit} from '@angular/core';
import {AmountChangeAction} from './actions/amount';
import {Store} from '@ngrx/store';

import * as fromRoot from './reducers';
import { Observable } from "rxjs/Observable";
import {Currency} from "./models/currency";
import {CurrenciesUpdateAction} from "./actions/currency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  amount$: Observable<number>;
  currencyRates$: Observable<Currency[]>;
  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
  }

  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction());
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.store.dispatch(new AmountChangeAction(number));
    }
  }
}

