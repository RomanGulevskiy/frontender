'use strict';

const guessNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  let userNumber = prompt('Программа загадала число от 1 до 100. Введите число:');

  while (userNumber !== null && +userNumber !== randomNumber) {

    if (userNumber > randomNumber) {
      userNumber = prompt('Ваше число больше! Введите число:');
    }

    if (userNumber < randomNumber) {
      userNumber = prompt('Ваше число меньше! Введите число:');
    }
  }

  userNumber !== null && alert('Вы угадали! Поздравляем!');
};

guessNumber();

