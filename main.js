'use strict';

// ------------------ Работа с атрибутами ----------------

/*
getAttribute(attrName) - возвращает значение указанного атрибута
setAttribute(name, value) - добавляет указанные атрибуты и его значения к элементу
hasAttribute(attrName) - возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) - удаляет указанный атрибут
*/

// получаем элемент по id
const img = document.querySelector('#logo');
const srcValue = img.getAttribute('src');
console.log(srcValue);

// меняем значение атрибута src (заменяем картинку)
// первым занчением добавляем/обращаемся к атрибуту, вторым значением прописываем его свойства
img.setAttribute('src', './img/php.png');
// указываем ширину картинки
img.setAttribute('width', '200');
// к некоторым атрибутам возможно обратиться на прямую
img.src = './img/js.png';
// проверяем есть ли атрибут, возвращает true или false
console.log(img.hasAttribute('src'));
// удаляем атрибут ширины картинки
img.removeAttribute('width');

const button = document.querySelector('#button');
button.setAttribute('value', 'Отправить');
button.value = 'Текст для кнопки';