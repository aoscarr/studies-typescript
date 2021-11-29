import { Deal } from './models/Deal.js';

var deal = new Deal(new Date(), 10, 100);

console.log(deal.volume);
console.log(deal.date);