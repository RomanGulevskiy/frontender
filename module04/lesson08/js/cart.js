'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, {price, quantity}) => acc + price * quantity, 0);
  },
  increaseCount(num) {
    this.count += num;
  },
  add(name, price, quantity = 1) {
    const item = {'name': name, 'price': price, 'quantity': quantity}
    this.items.push(item);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.getTotalPrice());
  },
}

cart.add('бананы', 10, 20);
cart.add('апельсины', 5, 30);
cart.add('яблоки', 1, 40);
cart.print();
