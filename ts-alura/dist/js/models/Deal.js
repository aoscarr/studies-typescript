export class Deal {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    get date() {
        /* applying defensive programming to prevent the dev from changing the date value.
          I pass the property by copying and not by reference.*/
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
