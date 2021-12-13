import { Deals } from '../models/Deals.js';

export class DealsView {
  private element: HTMLElement;
  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }
  template(model: Deals): string {
    return `
         <table class="table table-hover table-bordered">
            <thead>
               <tr>
                  <th>DATE</th>
                  <th>QUANTITY</th>
                  <th>VALUE</th>
               </tr>
            </thead>
            <tbody>
               ${model
                 .list()
                 .map((deal) => {
                   return `
                     <tr>
                        <td>?</td>
                        <td>${deal._quantity}</td>
                        <td>${deal._value}</td>
                     </tr>
                  `;
                 })
                 .join('')}
            </tbody>
         </table>
      `;
  }
  update(model: Deals): void {
    const template = this.template(model);
    console.log(template);

    this.element.innerHTML = template;
  }
}
