'use strict';

// ------------------ 17. Классы. Конструкторы объектов ----------------

// const person = {
//     userName: 'Сергей', 
//     age: 40,
//     isMArried: true,
//     sayHi: function (yourName) {
//         console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
//     }
// };

// const person2 = {
//     userName: 'Павел', 
//     age: 28,
//     isMArried: false,
//     sayHi: function (yourName) {
//         console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
//     }
// };

// Опишем класс, это как шаблон для всех будущих объектов person которые будут создаваться на его основе
class Person {
    // constructor - функция, которая принимает значения
    constructor (userName, age, isMArried) {
        this.userName = userName;
        this.age = age;
        this.isMArried = isMArried;
    }
    // Добавляем новый метод sayHi, он доступен всем объектам на основе класса Person 
    sayHi(yourName) {
        console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
    }
}

const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);
console.log(person1, person2);
// Используем новый метод seyHi в объектах
person1.sayHi('Юрий');
person2.sayHi('Юрий');

