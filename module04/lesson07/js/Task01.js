'use strict';

const getRandomIntArray = len => {
  const array = new Array(len).fill(null);
  const min = 1;
  const max = 100;

  return array.map(item => Math.floor(Math.random() * (max - min + 1) + min));
};

console.log(getRandomIntArray(10));
