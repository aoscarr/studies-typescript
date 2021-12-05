export class Deal {
   
   constructor(
      private _date: Date,
      public readonly _quantity: number,
      public readonly _value: number)
   {}
   
   get date(): Date{
      /* applying defensive programming to prevent the dev from changing the date value. 
      I pass the property by copying and not by reference.*/
      const date = new Date(this._date.getTime())
      return date;
   }

   get volume(): number {
      return this._quantity * this._value;
   }
}