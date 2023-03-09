'use strict';

const reverseString = str => {
  let resString = '';

  for (let i = str.length; i > 0; i--) {
    resString += str[i - 1];
  }

  return resString;
};

console.log(reverseString('string'));
