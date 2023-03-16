'use strict';

const getLeapYears = (startYear, endYear) => {
  startYear > endYear && ([startYear, endYear] = [endYear, startYear]);

  return Array.from({ length: endYear - startYear + 1 }, (n, i) => startYear + i)
    .filter(n => ((n % 100) && !(n % 4)) || !(n % 400));
}

console.log(getLeapYears(1000, -2000));
