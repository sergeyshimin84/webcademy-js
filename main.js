'use strict';

// Вывод в консоль
console.log('Hello,from JS!');

// ------------------ Переменные -------------------
let user = 'Сергей';
console.log(user);

// ------------------- Типы переменных -------------
// let - может менять свое значение во время работы программы
let userName = 'Сергей';
console.log(userName);

userName = 'Виталий';
console.log(userName);

// const - не может менять значение
const yearOfBirth = 1990;

// var - устаревший формат объявления переменной (не рекомендуеться к использованю)

var city = 'Moscow';
city = 'Barnaul';
console.log(city);

function sum() {
    var  name = 'Yurij'
    console.log(name);
}
sum();
// name не выведется в консоль (доступна только внутри функции)
// console.log(name); 

{
    let userName2 = 'Ivan';
    console.log(userName2);

    var someNumber = 10;
    console.log(someNumber);
}
// userName вне зоны видимости, выдаст ошибку 
// console.log(userName2);
console.log(someNumber);


