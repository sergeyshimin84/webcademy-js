'use strict';

// ------------------ 13. Методы в объектах ----------------
// Метод в который записана функция называется методом объекта 
const person = {
    userName: 'Марк', 
    age: 30,
    isMArried: false,
    sayHi: function (name) {
        console.log(`Привет, ${name}!`);
    }
};
// Вызываеться как функциия
person.sayHi('Олег');

// ------------------ 14. Ключевое слово this ----------------
const person2 = {
    userName: 'Сергей', 
    age: 40,
    isMArried: true,
    sayHi: function (name) {
        console.log(`Привет, ${name}! Меня зовут ${person2.userName}.`);
    }
};
person2.sayHi('Андрей');
// this ссылаеться сразу на объект
const person3 = {
    userName: 'Сергей', 
    age: 40,
    isMArried: true,
    sayHi: function (name) {
        console.log(this);
        console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
    }
};
person3.sayHi('Андрей');
