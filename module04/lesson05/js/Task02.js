'use strict';

const isPrime = number => {
  let res = true;

  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        res = false;
        break;
      }
    }
  } else {
    res = false;
  }

  return res;
};

console.log(isPrime(11));
