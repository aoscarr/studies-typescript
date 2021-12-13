// Array<Deal> === Deal[]
export class Deals {
    constructor() {
        this._deals = [];
    }
    add(deal) {
        this._deals.push(deal);
    }
    //ReadonlyArray<Deal> === readonly Deal[]
    list() {
        return this._deals;
        //[...this._deals]; // '...' = spread operator - pega cada elemento da lista e coloca na outra, cria uma igual.
    }
}
