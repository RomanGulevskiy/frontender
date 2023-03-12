'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names, prefix) => {
  let resNames = [];

  for (let i = 0; i < names.length; i++) {
    resNames.push(prefix + ' ' + names[i]);
  }

  return resNames;
};

console.log(addPrefix(names, 'Mr'));
