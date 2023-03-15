'use strict';

const guessNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  while (true) {
    let userNumber = prompt('Программа загадала число от 1 до 100. Введите число:');

    if (userNumber === null) {
      break;
    }

    if (Number.isNaN(+userNumber)) {
      alert('Вы ввели не число!');
      continue;
    }

    if (userNumber > randomNumber) {
      alert('Ваше число больше!');
    } else if (userNumber < randomNumber) {
      alert('Ваше число меньше!');
    } else {
      alert('Вы угадали! Поздравляем!');
      break;
    }
  }
};

guessNumber();
