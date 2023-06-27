'use strict';

// ------------------ Выбор DOM элементов ----------------

// Выбор одного элеменнта DOM по селектору
// document.querySelector('selector'); 
// Обращаемся к глобальному объекту браузера document (querySelector выбирает первый элемент на странице, поиск происходит сверху вниз)

const header = document.querySelector('h2');
console.log(header);

header.classList.add('red');

document.querySelector('.heading-3').classList.add('green');

// Выбор коллекции элементов
const headings = document.querySelectorAll('h2');
console.log(headings);
// Нашшли все заголовки, пробижаллись циклом for of, добавили к каждому класс .red-text
for (let heading of headings) {
    console.log(heading);
    heading.classList.add('red-text');
}
// Нашшли все заголовки, пробижаллись циклом for of, добавили к каждому класс .green-text
const paragraphs = document.querySelectorAll('p');
for (let p of paragraphs) {
    console.log(p);
    p.classList.add('green-text');
}
// Пример с forEach
paragraphs.forEach(function (item) {
    item.classList.add('green-text');
})

// Также есть следующие методы
document.getElementsByClassName();// выбор по имени класса
document.getElementsByTagName();// выбор по тегу
document.getElementById('');// выбор по id