'use strict';

// ------------------ 6.1 Параметры и аргументы для функций ----------------

// const userName = 'Марк';
// console.log(`Привет, ${userName}! Как твои дела`);

function sayHi(name) {
    console.log(`Привет, ${name}! Как твои дела`);
}

sayHi('Марк');
sayHi('Олег');
sayHi('Женя');

// ------------------- 6.2 return -----------------------
function summ(a, b) {
    const result = a + b;
    return result;//после return функция завершает работу
}

let res = summ(15, 20);
console.log(res);