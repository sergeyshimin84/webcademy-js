'use strict';

// ------------------ setInterval ----------------

// Позволяет запускать код с определенной периодичностью
// Первым аргументом передается функция, вторым время в мс
// const timeIntervalID = setInterval(function () {
//     console.log('Approved!');
// }, 2000);
// Прекращает работу setInterval (возвращает id, отследив его прекращает работу) 
// clearInterval(timeIntervalID);

// ------------------ setTimeout ----------------
// Запускает работу функции через определенное время
// const timerID = setTimeout(function () {
//     console.log('setTimeout Approved!');
// }, 2000);
// Прекращает работу setTimeout
// clearInterval(timerID);

// ------------------ setInterval + setTimeout ----------------
// const timerID = setInterval(function () {
//     console.log('setInterval ON');
// }, 1000)

// setTimeout(function () {
//     clearInterval(timerID);
//     console.log('setInterval OFF');
// }, 10000)

// ------------------ Секундомер ----------------

const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

// Старт
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
    timerID = setInterval(function(){
        counter++;
        counterElement.innerText = counter;
    }, 1000)
}

// Пауза
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
    clearInterval(timerID);
}

// Сброс
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);  
};




