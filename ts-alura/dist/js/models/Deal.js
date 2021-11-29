export class Deal {
    constructor(date, quantity, value) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }
    get date() {
        return this._date;
    }
    get value() {
        return this._value;
    }
    get quantity() {
        return this._quantity;
    }
    get volume() {
        return this._quantity * this._value;
    }
}
