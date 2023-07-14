'use strict';

// ------------------ Цепочка промисов. Несколько промисов с setTimeout ----------------

const checkRooms = new Promise(function(resolve, reject){
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
// в then попадает успешный результат resolve
// checkRooms.then(function(data){
//     console.log('--- then 1 ---');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Едем в отпуск! :)');
// в catch попадает результат с ошибкой reject  
// }).catch(function(data){
//     console.log('--- catch ---');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Отпуск отменяеться :(');
// })

checkRooms.then(function(data){
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
}).then(function(data){
    console.log('--- then 2 ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Едем в отпуск! :)');
}).catch(function(data){
    console.log('--- catch ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Отпуск отменяеться :(');
})
