'use strict';

// ------------------ 7. Массивы ----------------

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
console.log(autoBrands);

// Выведем только Audi
console.log(autoBrands[0]);

// Выводим длину массива
console.log(autoBrands.length);

// Можно вкладывать различные занные и другие массивы (но это плохая практика, необьходимо создавать однородные массивы)
const autoBrands2 = ['Audi', 'BMW', true, ['Mazda', 'Toyota'], 70];
console.log(autoBrands2);