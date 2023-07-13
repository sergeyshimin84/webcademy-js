'use strict';

// ------------------ Создание промиса ----------------

const myPromise = new Promise(function (resolve, reject){
    console.log('Promise created');
    setTimeout(function(){
        const response = true;

        if (response) {
            let message = 'SUCCESS'
            resolve(message);
        } else {
            let message = 'FAILED'
            reject(message);
        }
    }, 1500)
});

myPromise.then(function(data){
    setTimeout(() => {
        console.log('Then 1');
        console.log(data);
    }, 1000)
}).then(function(data){
    setTimeout(() => {
        console.log('Then 2');
    }, 500)
}).catch(function(data){
    console.log('Catch');
    console.log(data);
})

