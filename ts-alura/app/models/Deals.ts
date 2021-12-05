import { Deal } from './Deal.js';
// Array<Deal> === Deal[]
export class Deals{ 
   private _deals: Deal[] = [];

   add(deal: Deal) {
      this._deals.push(deal);
   }
   //ReadonlyArray<Deal> === readonly Deal[]
   list(): readonly Deal[]{
      return this._deals;
      //[...this._deals]; // '...' = spread operator - pega cada elemento da lista e coloca na outra, cria uma igual.
   }
}