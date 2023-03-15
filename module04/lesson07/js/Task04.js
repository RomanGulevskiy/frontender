'use strict';

const getLeapYears = (startYear, endYear) => {
  if (startYear < 1582 || endYear < 1582) {
    return 'Вы ввели некорректные данные. ' +
      'Функция выводит список високосных годов по григорианскому календарю с 1582 года.';
  }

  let resStartYear = startYear > endYear ? endYear : startYear;
  let resEndYear = endYear < startYear ? startYear : endYear;

  return Array.from({ length: resEndYear - resStartYear + 1 }, (n, i) => resStartYear + i)
    .filter(n => ((n % 100) && !(n % 4)) || !(n % 400));
}

console.log(getLeapYears(100, 0));
