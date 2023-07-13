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
// для гарантированного последовательного выполения ассинхроннго кода необходимо оборачивать в Promise каждый then
myPromise.then(function(data){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Then 1');
            console.log(data);

            const response = false;
            if (response) {
                resolve('Data from then 1')
            } else {
                reject('Data from then 1')
            }
        }, 1000)
    })
    
}).then(function(data){
    setTimeout(() => {
        console.log('Then 2');
        console.log(data);
    }, 500)
}).catch(function(data){
    console.log('Catch');
    console.log(data);
})

