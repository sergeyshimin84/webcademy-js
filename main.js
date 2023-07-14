'use strict';

// ------------------ Цепочка промисов. Отдельные функции. Несколько промисов с setTimeout ----------------

checkRooms()
    .then(checkTickets)
    .then(success)
    .catch(failed);

function checkRooms (){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Проверяем номера в отеле...');
            const availableRooms = true;
    
            if (availableRooms) {
                resolve('Номера есть!');
            } else {
                reject('Номеров нет.');
            }
        }, 1500)
    });
}

function checkTickets(data){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('--- then 1 ---');
            console.log('Ответ на предыдущем шаге:', data);
            console.log('Проверяем авиабилеты...');
            const availableTickets = true;
        
            if (availableTickets) {
                let message = 'Билеты есть!';
                resolve(message)
            } else {
                let message = 'Билетов нет';
                reject(message);
            }
        }, 1000)
    })
}

function success(data){
    console.log('--- success ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Едем в отпуск! :)');
}

function failed(data) {
    console.log('--- failed ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Отпуск отменяеться :(');
}

