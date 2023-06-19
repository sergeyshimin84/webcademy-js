'use strict';

// ------------------ 7.1 Методы массивов ----------------

/*
arr.push(items) - Добавить элемент в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива
arr/unshift(...items) - Добавить элемент в начало массива
arr.splice([start]), [deketeCount, newElements])
*/

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);
/*
Можем работать с данным массивом в переменной объявленной const,
т.к. массивы и объекты записываються в переменную не целиком, 
а переменная как бы ссылаеться на этот массив/объект 
(если данная константа сошлется на новый массив, тогда получим ошибку)
*/
autoBrands.push('Nissan'); 
console.log(autoBrands);
// array2 == autoBrands будет true, т.к. оба массива ссылаются на одну и туже область памяти
let array2 = autoBrands;
// array3 == autoBrands будет false, т.к. массивы ссылаются на разные области памяти, несмотря на идентичность содержимого
let array3 = ['Audi', 'BMW', 'Mazda', 'Toyota'];

// Удаляем один элемен из массива со второй позиции (включительно)
autoBrands.splice(2, 1);
console.log(autoBrands);
