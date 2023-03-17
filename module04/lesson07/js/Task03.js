'use strict';

const getRandomIntArray = (len, min, max, parity = '') => {
  const resArray = [];

  min > max && ([min, max] = [max, min]);

  while (resArray.length < len) {
    const tmpNum = Math.floor(Math.random() * (max - min + 1) + min);

    if (!parity || (parity === 'even' && !(tmpNum % 2)) || (parity === 'odd' && tmpNum % 2)) {
      resArray.push(tmpNum);
    }
  }

  return resArray;
};

console.log(getRandomIntArray(99, 10, -10, 'odd'));
