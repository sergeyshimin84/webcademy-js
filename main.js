'use strict';

// ------------------ Работа с элементами ----------------

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить текстовое содержимое внутри элемента
none.innerText = ''

// Клонирование элемента
node.cloneNode() // true с внутренним содержанием (текста и теги),
false - без внутреннего содержания

// Вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

// Выбор контейнера
const container = document.querySelector('#elementsContainer');

// Создание загловка
const newHeader = document.createElement('h1');
newHeader.innerText = 'Новый заголовок';
container.append(newHeader);

// Копирование шапки
const mainHeader = document.querySelector('header');
// Для копирования всего содержимого тега в метод cloneNode передаем true 
const headerCopy = mainHeader.cloneNode(true);
// Вставляем элемент в container
container.append(headerCopy);

// Вставка разметки через строку
const htmlExample = '<h2>Еще один заголовок</h2>';
container.insertAdjacentHTML('beforeend', htmlExample);

// Вставка разметки через шаблонные строки
const title = 'Текст заголовка';
// Передаем текст через шаблонную строку
const htmlExample2 = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample2);