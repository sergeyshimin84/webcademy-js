'use strict';

// ------------------ 6.3 Функции как аргумент ----------------

function summ(a, b) {
    return a + b; //без return вместо аргумента возвращался бы undefined
}

const result = summ(summ(10, 15), summ(20, 20)); //функция передается как аргумент
console.log(result);

function diff (a, b) {
    return a - b;
}

// колбэк функция (функция обратного вызова вызываемая в другой функции)
function doSomething(func) {
    let x = 15;
    let y = 5;
    let result = func(x, y);
    console.log(result);
}

doSomething(summ);
doSomething(diff);