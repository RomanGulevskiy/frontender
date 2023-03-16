'use strict';

const getUserNumber = text => {
  let userNumber = prompt(text);

  if (userNumber === null) {
    return false;
  }

  while (Number.isNaN(+userNumber)) {
    userNumber = prompt('Вы ввели не число! Введите число:');
  }

  return parseInt(userNumber);
};

const guessNumber = () => {
  let start = getUserNumber('Введите первое число:');
  if (start === false) return;

  let end = getUserNumber('Введите второе число:');
  if (end === false) return;

  start > end && ([start, end] = [end, start]);
  console.log(start);
  console.log(end);
  const numbersAmount = end - start;
  const limitAttempts = numbersAmount / 100 * 30;
  const userNumbers = [];

  const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);
  let userNumber = getUserNumber(`Программа загадала число от ${start} до ${end}. Введите число:`);

  while (userNumber !== null && limitAttempts > userNumbers.length && userNumber !== randomNumber) {

    while (start > userNumber || userNumber > end) {
      userNumber = getUserNumber('Ваше число за пределами загаданного диапазона! Введите число:');
      if (userNumber === false) return;
    }

    if (userNumbers.includes(userNumber)) {
      userNumber = getUserNumber('Вы уже вводили это число! Введите число:');
      if (userNumber === false) return;
    }

    if (userNumber > randomNumber) {
      userNumbers.push(userNumber);
      userNumber = getUserNumber('Ваше число больше! Введите число:');
      if (userNumber === false) return;
    }

    if (userNumber < randomNumber) {
      userNumbers.push(userNumber);
      userNumber = getUserNumber('Ваше число меньше! Введите число:');
      if (userNumber === false) return;
    }
  }

  userNumber === randomNumber && alert('Вы угадали! Поздравляем!');
  limitAttempts < userNumbers.length && alert('Ваши попытки закончились!');
};

guessNumber();
