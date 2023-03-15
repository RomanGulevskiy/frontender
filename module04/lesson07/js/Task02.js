'use strict';

const getRandomIntArray = (len, min, max) => {
  const array = new Array(len).fill(undefined);
  let resMin = min;
  let resMax = max;

  if (resMin > resMax) {
    resMin = max;
    resMax = min;
  }

  return array.map(item => Math.floor(Math.random() * (resMax - resMin + 1) + resMin));
};

console.log(getRandomIntArray(10, 100, -50));
