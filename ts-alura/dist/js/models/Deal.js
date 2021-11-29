export class Deal {
   #date;
   #quantity;
   #value;

   constructor(date, quantity, value) {
      this.#date = date;
      this.#quantity = quantity;
      this.#value = value;
   }
   get date() {
      return this.#date;
   }
   get value() {
      return this.#value;
   }
   get quantity() {
      return this.#quantity;
   }
   get volume() {
      return this.#quantity * this.#value;
   }
}