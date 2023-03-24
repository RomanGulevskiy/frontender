'use strict';

const cart = {
  items: [],
  count: 0,
  calculateItemPrice() {
    return this.items.reduce((acc, {price, quantity}) =>
      acc + price * quantity, 0);
  },
  increaseCount(num) {
    this.count += num;
  },
  add(name, price, quantity = 1) {
    const item = {name, price, quantity};
    this.items.push(item);
    this.increaseCount(quantity);
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
};

cart.add('бананы', 10, 20);
cart.add('апельсины', 5, 30);
cart.add('яблоки', 1, 40);
cart.print();
