import { Deal } from './Deal.js';

export class Deals{ 
   private _deals: Array<Deal> = [];

   add(deal: Deal) {
      this._deals.push(deal);
   }
   list(): ReadonlyArray<Deal>{
      return this._deals;
      //[...this._deals]; // '...' = spread operator - pega cada elemento da lista e coloca na outra, cria uma igual.
   }
}