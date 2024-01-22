// Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.

const array = [2, 5, 4, 9, 10, 1, 3];
const result_1 = array.map(x => x * 2);
console.log(result_1);


// Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр.

const words = ['cat', 'dog', 'bird', 'elephant', 'snake'];
const result_2 = words.map(word => word.toUpperCase());
console.log(result_2);


//Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.

const array_1 = [2, 5, 4, 9, 10, 1, 3];
let sum = 0;
array_1.forEach(value => sum += value);
console.log(sum);


// Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.

const array_2 = [-2, 5, -4, -9, 10, 1, -3];
console.log(array_2.filter(x => x > 0));