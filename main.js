'use strict';

// ------------------ Collback, Collback hell ----------------
// Обратный вызов, это функции которые передаются в другие функции и вызываются после их завершения
// 1. Проверяем номера в отеле
// 2. Проверяем авиобилеты
// function checkRooms(){
//     setTimeout(function(){
//         console.log('Проверяем номера в отеле...');
//         const availableRooms = false;

//         if (availableRooms) {
//             console.log('Номера есть!');
//             console.log('Едем в отпуск! :)');
//         } else {
//             console.log('Номеров нет.');
//             console.log('Отпуск отменяется :(');
//         }
//     }, 1000)
// }
// При проверке номеров в отеле вродебы все работает, но если добавить еще одно действие...
// checkRooms();

// function checkRooms(){
//     setTimeout(function(){
//         console.log('Проверяем номера в отеле...');
//         const availableRooms = true;

//         if (availableRooms) {
//             let message = 'Номера есть';
//             sumbitVacation(message)
//         } else {
//             let message = 'Номеров нет';
//             cancelVacation(message)
//         }
//     }, 1000)        
// }

// checkRooms();

// function cancelVacation(message) {
//     console.log('---cancelVacation---');
//     console.log('Ответ на предыдцщем шаге:', message);
//     console.log('Отпуск отменяется :(');
// }

// function sumbitVacation(message) {
//     console.log('---sumbitVacation---');
//     console.log('Ответ на предыдцщем шаге:', message);
//     console.log('Едем в отпуск! :)');
// }

// Сделаем функцию более универсальной
// function checkRooms(success, failed){
//     setTimeout(function(){
//         console.log('Проверяем номера в отеле...');
//         const availableRooms = true;

//         if (availableRooms) {
//             let message = 'Номера есть';
//             success(message);
//         } else {
//             let message = 'Номеров нет';
//             failed(message);
//         }
//     }, 1000)        
// }
// передаем в качестве аргументов функции sumbitVacation и cancelVacation
// checkRooms(sumbitVacation, cancelVacation);

// function cancelVacation(message) {
//     console.log('---cancelVacation---');
//     console.log('Ответ на предыдцщем шаге:', message);
//     console.log('Отпуск отменяется :(');
// }

// function sumbitVacation(message) {
//     console.log('---sumbitVacation---');
//     console.log('Ответ на предыдцщем шаге:', message);
//     console.log('Едем в отпуск! :)');
// }

function checkRooms(success, failed){
    setTimeout(function(){
        console.log('Проверяем номера в отеле...');
        const availableRooms = true;

        if (availableRooms) {
            let message = 'Номера есть';
            success(message);
        } else {
            let message = 'Номеров нет';
            failed(message);
        }
    }, 1000)        
}

function checkTickets(message, success, failed) {
    setTimeout(function(){
        console.log('---- function checkTickets ----');
        console.log('Ответ на предыдущм шаге:', message);

        console.log('Проверяем авиабилеты...');
        const availableTickets = true;

        if (availableTickets) {
            let message = 'Билеты есть';
            success(message);
        } else {
            let message = 'Билетов нет';
            failed(message);
        }
    }, 500)
}

function cancelVacation(message) {
    console.log('---cancelVacation---');
    console.log('Ответ на предыдцщем шаге:', message);
    console.log('Отпуск отменяется :(');
}

function sumbitVacation(message) {
    console.log('---sumbitVacation---');
    console.log('Ответ на предыдцщем шаге:', message);
    console.log('Едем в отпуск! :)');
}

// передаем в качестве аргументов функции sumbitVacation и cancelVacation
checkRooms(
    function(messageFromCheckRooms){
        checkTickets(
            messageFromCheckRooms, 
            function(messageFromCheckRooms){
                sumbitVacation(messageFromCheckRooms)
            },
            function(messageFromCheckTickets){
                cancelVacation(messageFromCheckTickets)
            })
    }, 
    function(messageFromCheckRooms){
        cancelVacation(messageFromCheckRooms)
    }
);

