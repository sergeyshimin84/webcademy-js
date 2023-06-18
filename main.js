'use strict';

// ------------------ 6.5 Стрелочные функции ----------------

// Пример обычной функции
function sayHi(name) {
    console.log(`Привет, ${name}! Как твои дела?`);
}
sayHi('Марк');

function summ (a, b) {
    const result = a + b;
}
summ(15, 15);

// Стрелочные функции
const sayHi2 = (name) => {
    console.log(`Привет, ${name}! Как твои дела?`);
}
sayHi2('Марк');

const summ2 = (a, b) => {
    return a + b;
}
summ2(10, 15);

// Краткая запись стрелочной функции (без фигурных скобок), в случае если выполняеться одно условие
const sayHi3 = (name) => console.log(`Привет, ${name}! Как твои дела?`);
sayHi3('Марк');

const summ3 = (a, b) => a + b;
summ3(5, 15);