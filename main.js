'use strict';

// ------------------ Цепочка промисов. Отдельные функции. Несколько промисов с setTimeout ----------------

// checkRooms()
//     .then(checkTickets)
//     .then(success)
//     .catch(failed);

// function checkRooms (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function () {
//             console.log('Проверяем номера в отеле...');
//             const availableRooms = true;
    
//             if (availableRooms) {
//                 resolve('Номера есть!');
//             } else {
//                 reject('Номеров нет.');
//             }
//         }, 1500)
//     });
// }

// function checkTickets(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('--- then 1 ---');
//             console.log('Ответ на предыдущем шаге:', data);
//             console.log('Проверяем авиабилеты...');
//             const availableTickets = true;
        
//             if (availableTickets) {
//                 let message = 'Билеты есть!';
//                 resolve(message)
//             } else {
//                 let message = 'Билетов нет';
//                 reject(message);
//             }
//         }, 1000)
//     })
// }

// function success(data){
//     console.log('--- success ---');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Едем в отпуск! :)');
// }

// function failed(data) {
//     console.log('--- failed ---');
//     console.log('Ответ на предыдущем шаге:', data);
//     console.log('Отпуск отменяеться :(');
// }

// ------------------ Async function. Асинхронные функции. Потребление промиса ----------------

// function promiseFunction (){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const result = false;
            
//             if (result) {
//                 resolve('DONE!');
//             } else {
//                 reject('FAIL!'); 
//             }
//         }, 500)
//     });
// }
// Создаем асинхронную функцию, ожидаем выполнение promiseFunction (при положительном результате выполняется try, иначе catch)
// async function startPromise(){
//     try {
//         const result = await promiseFunction();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// startPromise()

// ------------------ Несколько асинхронных операций. Серия промисов ----------------

function checkRooms (){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Проверяем номера в отеле...');
            let availableRooms = true;
    
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
            let availableTickets = false;
        
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

function submitVacation(data){
    console.log('--- submitVacation ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Едем в отпуск! :)');
}

function cancelVacation(data) {
    console.log('--- cancelVacation ---');
    console.log('Ответ на предыдущем шаге:', data);
    console.log('Отпуск отменяеться :(');
}
// Вариант запуска функции без try catch (упрощенный, не применять на практике), нет обработчика ошибок
// async function checkVacation(){
//     const roomsResult = await checkRooms();
//     const ticketsResult = await checkTickets(roomsResult);

//     if(ticketsResult) {
//         submitVacation(ticketsResult)
//     } else {
//         cancelVacation(ticketsResult)
//     }
// }
// Корректный вариант с применением try catch (теперь обрабатывает ошибки)
async function checkVacation(){

    try {
        const roomsResult = await checkRooms();
        const ticketsResult = await checkTickets(roomsResult);
        submitVacation(ticketsResult)
    } catch (err) {
        cancelVacation(err)
    }
}

checkVacation();