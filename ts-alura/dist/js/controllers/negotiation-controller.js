import { Deal } from '../models/Deal.js';
import { Deals } from '../models/Deals.js';
import { DealsView } from '../views/deals-view.js';
export class NegotiationController {
    constructor() {
        this.deals = new Deals();
        this.dealsView = new DealsView('#dealsView');
        this.inputData = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.dealsView.update(this.deals);
    }
    add() {
        const deal = this.createDeal();
        this.deals.add(deal);
        this.dealsView.update(this.deals);
        this.clearForm();
    }
    createDeal() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        const deal = new Deal(date, quantity, value);
        return deal;
    }
    clearForm() {
        this.inputData.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputData.focus();
    }
}
