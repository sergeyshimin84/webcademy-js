'use strict';

// ------------------ 10. Обход массива циклом for (of) ----------------

const autoBrands = ['Audi', 'BMW', 'Mazda']; 
// Все элементы из массива autoBrands попадают в переменную brand
for (let brand of autoBrands) {
    console.log(brand);
}

// ------------------ 11. Обход массива методом forEach() ----------------
// В переменную brand попадают все элементы массива, в i индекс элемента
// Прописываем функцию в качестве аргумента в forEach
autoBrands.forEach(function (brand, i) {
    console.log(`${brand} => ${i}`);
});

// Пример со стрелоочной функцией
autoBrands.forEach((brand, i) => {
    console.log(`${brand} => ${i}`);
});

// Запись в строчку
autoBrands.forEach((brand, i) => {console.log(`${brand} => ${i}`)});

// Создаем функцию отдельно, передаем в forEach в качестве аргумента
function printBrand (brand, i) {
    console.log(`${brand} => ${i}`);
}
autoBrands.forEach(printBrand);

// Пример со стрелоочной функцией
const printBrand2 = (brand, i) => {
    console.log(`${brand} => ${i}`);
}
autoBrands.forEach(printBrand2);