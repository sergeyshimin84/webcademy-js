'use strict';

// ------------------ Объект event ----------------

const list = document.querySelector('#list');
// Объект event являетс первым параметром функции addEventListener
list.addEventListener('click', (event) => {
    // this ссылаеться на родителя с #list (у которого слушаем addEventListener)
    console.log(this);
    // Объект event получает всю информацию о html элементе спровоцировавшим событие ('click') 
    console.log(event);
    // Свойство target получает информацию о том html элементе который спровоцировал событие ('click') 
    console.log(event.target);
})