'use strict';

const getRandomIntArray = (len, min, max) => {
  const array = new Array(len).fill(null);

  min > max && ([min, max] = [max, min]);

  return array.map(item => Math.floor(Math.random() * (max - min + 1) + min));
};

console.log(getRandomIntArray(10, 100, -50));
