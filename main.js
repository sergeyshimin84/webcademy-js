'use strict';

// ------------------ ToDo список задач ----------------

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    // Получаем значение из поля ввода (инпута)
    const taskText = todoInput.value;

    // Создаем тег li через разметку
    // const li = `<li>${taskText}</li>`;

    // Добавляем разметку на страницу
    // todoList.insertAdjacentHTML('beforeend',  li);

    // Создаем тег li с помощью создания элемента (в последующем можем модифицировать, добавлять элементы)
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    console.log(newTask);

    // Создаем кнопку удалить
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button'); //Назначена роль кнопка
    deleteBtn.innerText = 'Удалить';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);
    console.log(newTask);
    deleteBtn.addEventListener('click', function () {
        // newTask.remove() //Простое удаление элемента
        
        // Обращаемся к родительскому элементу через this, ищем ближайшего предка,
        // который соответствует CSS-селектору 'li' с помощью closest, удаляем его (более точное описание удаления)
        this.closest('li').remove();
    });

    // Добавляем элемент на страницу
    todoList.append(newTask)

    // Очищаем поле ввода (инпут)
    todoInput.value = '';
    
    // Фокус на поле ввода
    todoInput.focus();
}