'use strict';

// ------------------ 2.2 Типы данных ----------------
let userName = 'Serg'; // Строка (Текст)

let number = 30; // Число

let isMarried = true; // Логическое значение true/false

// Динамическая типизация
let someVeriable = 'Some value'; // сейчас someVeriable строка (string)
someVeriable = 50; // теперь число (number)
someVeriable = true; // теперь логическое значение (boolean)
console.log(someVeriable);

// Значение null
// "ничего", "пусто" или "значение неизвестно"
let age = 10;
age = null;

// Значение undefined
// Небыло присвоено или неопределено
let txt; // undefined
console.log(txt);

// Структуры данных:
// Объекты object
// Массивы

// Оператор typeof
const someName = 'Vadim';
console.log(typeof someName); //определяем тип переменной

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(90071992547409911646546846151n);//добавляя n применяем BigInt

//Symbol
//Символ - уникальное примитивное значение
//Позволяет добавить уникальное свойство к объекту, с
//уверенностью что он не перезапишет никакое другое свойство.

/*
Числа number
Строки string
Булевый тип данных boolean
null
undefined
Объекты object
Массивы
BigInt
Symbol
*/ 