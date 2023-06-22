'use strict';

// ------------------ 15. Объекты обход циклом for in ----------------
// for in может обходить не итерируемые объекты
const person = {
    userName: 'Сергей', 
    age: 40,
    isMArried: true,
    sayHi: function (yourName) {
        console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
    }
};
person.sayHi('Андрей');

for (let key in person) {
    console.log(key, ':', person[key]);
}
