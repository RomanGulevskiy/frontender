'use strict';

const getUserNumber = message => {
  let userNumber = prompt(message);
  if (!userNumber) return;

  while (Number.isNaN(+userNumber)) {
    userNumber = prompt(message);
  }

  return +userNumber;
};

const guessNumber = () => {
  const messages = {
    notNumber: 'Вы ввели не число. Введите число:',
    getStart: 'Введите первое число:',
    getEnd: 'Введите второе число:',
    outOfRange: 'Ваше число за пределами загаданного диапазона! Введите число:',
    isRepeat: 'Вы уже вводили это число! Введите число:',
    isLess: 'Ваше число больше! Введите число:',
    isGreater: 'Ваше число меньше! Введите число:',
    gameLoss: 'Вы не угадали. Ваши попытки закончились!',
    gameWin: 'Вы угадали! Поздравляем!',
  };

  let start = getUserNumber(messages.getStart);
  if (!start) return;

  let end = getUserNumber(messages.getEnd);
  if (!end) return;

  start > end && ([start, end] = [end, start]);

  const limitAttempts = Math.round((end - start) / 100 * 30);
  const userNumbers = [];

  const randomNumber = Math.floor(Math.random() * (end - start + 1) + start);

  let message = `Программа загадала число от ${start} до ${end}. Введите число:`;
  let userNumber;

  do {
    userNumber = getUserNumber(message);

    switch (true) {
      case (start > userNumber || userNumber > end):
        message = messages.outOfRange;
        break;
      case (userNumber === randomNumber):
        alert(messages.gameWin);
        return;
      case (userNumbers.includes(userNumber)):
        message = messages.isRepeat;
        break;
      case (userNumber > randomNumber):
        message = messages.isLess;
        userNumbers.push(userNumber);
        break;
      case (userNumber < randomNumber):
        message = messages.isGreater;
        userNumbers.push(userNumber);
        break;
    }

    if (limitAttempts <= userNumbers.length) {
      alert(messages.gameLoss);
    }

  } while (userNumber !== null && limitAttempts > userNumbers.length);

};

guessNumber();
