'use strict';

const getUniqueIPCount = arr => {
  return Array.from(new Set(arr)).length;
};

console.log(getUniqueIPCount(listIPv4));

