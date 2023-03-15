'use strict';

const getUserNumber = text => {
  let userNumber = prompt(text);

  if (userNumber === null) {
    return false;
  }

  while (Number.isNaN(+userNumber)) {
    alert('Вы ввели не число!');
    userNumber = prompt(text);
  }

  return parseInt(userNumber);
};

const guessNumber = () => {
  const userNumber01 = getUserNumber('Введите первое число:');
  const userNumber02 = getUserNumber('Введите второе число:');

  if (userNumber01 === false || userNumber02 === false) {
      return;
  }

  let resUserNumber01 = userNumber01 > userNumber02 ? userNumber02 : userNumber01;
  let resUserNumber02 = userNumber02 < userNumber01 ? userNumber01 : userNumber02;
  let numbersAmount = resUserNumber02 - resUserNumber01;
  let userNumbers = [];

  const randomNumber = Math.floor(Math.random() * (resUserNumber02 - resUserNumber01 + 1) + resUserNumber01);

  while (numbersAmount / 100 * 30 > userNumbers.length) {
    let userNumber = getUserNumber(`Программа загадала число от ${resUserNumber01} до ${resUserNumber02}. Введите число:`);

    if (userNumber === null) {
      break;
    }

    if (userNumbers.includes(userNumber)) {
      alert('Вы уже вводили это число!');
      continue;
    }

    if (userNumber > randomNumber) {
      userNumbers.push(userNumber);
      alert('Ваше число больше!');
    } else if (userNumber < randomNumber) {
      userNumbers.push(userNumber);
      alert('Ваше число меньше!');
    } else {
      alert('Вы угадали! Поздравляем!');
      return;
    }
  }

  alert('Ваши попытки закончились!');
};

guessNumber();
