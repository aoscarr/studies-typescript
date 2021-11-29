import { Deal } from '../models/Deal.js';

export class NegotiationController{
   private inputData: HTMLInputElement;
   private inputQuantity: HTMLInputElement;
   private inputValue: HTMLInputElement;

   constructor() {
      this.inputData = document.querySelector('#data');
      this.inputQuantity = document.querySelector('#quantity');
      this.inputValue = document.querySelector('#value');
   }

   add(): void {
      const deal = this.createDeal()
      console.log(deal);
      this.clearForm();
   }
   createDeal(): Deal {
      const exp = /-/g;
      const date = new Date(this.inputData.value.replace(exp, ','));
      const quantity = parseInt(this.inputQuantity.value);
      const value = parseFloat(this.inputValue.value);
      
      const deal = new Deal(
         date,
         quantity,
         value
      )

      return deal;
   }
   clearForm(): void {
      this.inputData.value = '';
      this.inputQuantity.value = '';
      this.inputValue.value = '';
      this.inputData.focus();
   }
}