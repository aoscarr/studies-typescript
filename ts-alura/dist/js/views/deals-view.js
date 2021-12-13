export class DealsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
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
                        <td>${new Intl.DateTimeFormat().format(deal.date)}</td$>
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
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}
