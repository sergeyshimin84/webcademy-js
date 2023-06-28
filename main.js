'use strict';

// ------------------ Работа с CSS классами ----------------

/* 
element.classList.add()
.add() добавляет класс
.remove() удаляет класс
.toggle() добавляет или удаляет класс при его наличии ("переключатель"). 
Когда toggle добавляет класс, возвращает true, когда убиррает false.
.contaiins() проверяет наличие класса у элемента. Возвращает true или false.
*/

const heading = document.querySelector('h2');
console.log(heading);

heading.classList.add('red-text');
heading.classList.remove('red-text');
heading.classList.toggle('green-text');
heading.classList.toggle('green');