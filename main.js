'use strict';

// ------------------ Пример fetch с промисами получение данных по API ----------------
// https://www.cbr-xml-daily.ru/

// 1. Получить данные с сервера
// Для получения данных с сервера используем fetch (возвращает промис)
// const response = fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// Необходимо потребить json объект (колбек возвращает всегда один аргумент)
// Потребляем через цепочку then
//     .then(function(data){
//         return data.json()
//     }).then(function(data){
//         console.log(data);
//     // Можно прописать catch (в случае ошибки)
//     }).catch(function(err){
//         console.log(`${err} Обратитесь к администратору!`);
//     })
    
// console.log(response);

// Верное решение через асинхронную функцию (всегда возвращает промис)
// async function getCurrencies (){
//     const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
//     const response = await fetch(url);
//     const data = await response.json();
    
//     const usdRate = data.Valute.USD.Value.toFixed(2);
//     const eurRate = data.Valute.EUR.Value.toFixed(2);

    // 2. Отобразим данные на странице
//     const usdElement = document.querySelector('#usd');
//     console.log(usdElement);
//     const eurElement = document.querySelector('#eur');
//     console.log(eurElement);

//     usdElement.innerText = usdRate;
//     eurElement.innerText = eurRate;
// }

// getCurrencies();

async function getCurrencies (){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url);
    const data = await response.json();

    // 2. Отобразим данные на странице (вызываем следующую функцию из асинхронной, т.к. с return вернет промис)
    renderRates(data)
}

getCurrencies();

function renderRates (data) {
    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);
    
    // 2. Отобразим данные на странице
    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}

