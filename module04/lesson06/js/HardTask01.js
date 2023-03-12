'use strict';

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (allCashbox) => {
  let goodsQuantity = 0;
  let goodsPrice = 0;

  for (let i = 0; i < allCashbox.length; i++) {
    goodsQuantity += allCashbox[i][0];
    goodsPrice += allCashbox[i][1];
  }

  return Math.round(goodsPrice / goodsQuantity);
};

console.log(getAveragePriceGoods(allCashbox));
