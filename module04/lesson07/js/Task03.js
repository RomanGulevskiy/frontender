'use strict';

const getRandomIntArray = (len, min, max, parity) => {
  let resMin = min > max ? max : min;
  let resMax = max < min ? min : max;
  let resArray = [];

  while (resArray.length < len) {
    let tmpNum = Math.floor(Math.random() * (resMax - resMin + 1) + resMin);

    if (parity === 'odd' && tmpNum % 2 === 0) {
      resArray.push(tmpNum);
    } else if (parity === 'even' && tmpNum % 2 !== 0) {
      resArray.push(tmpNum);
    }
  }

  return resArray;
};

console.log(getRandomIntArray(10, 100, -50, 'odd'));
