'use strict';

// ------------------ 12. Обьекты ----------------
// Свойства объектов
let userName = 'Марк' 
let age = 30;
let isMArried = false;

const person = {
    userName: 'Марк', 
    age: 30,
    isMArried: false
}

console.log(person);
console.log(person.userName);
console.log(person['age']);

// Добавляем свойство объекта
person.profession = 'JS developer';
console.log(person);

// Удаляем свойство
delete person.age;
console.log(person);