'use strict';

// ------------------ Работа с прослушкой событий ----------------

// находим кнопку
const button = document.querySelector('#button');
// ноходим картинку
const img = document.querySelector('#logo');
// меняем название кнопки
button.value = 'удалить';
// прослушиваем событие клик (позволяет прописать множество действий при клике)
button.addEventListener('click', function() {
    console.log('click!');
    img.remove();
});
// onclick совершает указанное действие при клике (в последующем только перезаписываеться)
button.onclick = function () {
    console.log('click1!');
};