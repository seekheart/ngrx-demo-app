import { Action } from '@ngrx/store';

export const AMOUNTCHANGE = '[Amount] Change';

export class AmountChangeAction implements Action {
  type = AMOUNTCHANGE;
  payload: number;
  constructor(payload: number) { this.payload = payload; }
}
