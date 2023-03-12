'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {
  let resStudents = [];

  for (let i = 0; i < allStudents.length; i++) {
    if (!failedStudents.includes(allStudents[i])) {
      resStudents.push(allStudents[i]);
    }
  }

  return resStudents;
}

console.log(filter(allStudents, failedStudents));
