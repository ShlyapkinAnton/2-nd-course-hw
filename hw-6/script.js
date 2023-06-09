// function game__one() {
//     let monthNumber = prompt('Укажите номер месяца');
// switch (monthNumber) {
// 	case '12':
// 	case '1':
// 	case '2':
// 		alert('Зима');
// 		break;
//     case '3':
// 	case '4':
// 	case '5':
// 		alert('Весна');
// 		break; 
//     case '6':
// 	case '7':
// 	case '8':
// 		alert('Лето');
// 		break; 
//     case '9':
// 	case '10':
// 	case '11':
// 		alert('Осень');
// 		break;
// 	default: alert('Что-то тебя совсем далеко унесло');
// 		break;
// }
// }

// Task 1
// let num = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < num.length; i++) {
// 	if (num[i] == 0) 
//     break;
// 	console.log(num[i]);
// }

// Task 1 v2
// let num = [1, 5, 4, 10, 0, 3];
// for (let item of num) {
// 	if (item === 0) {
// 		break;
// 	} 
// 	console.log(item);	
// }

// // Task 2
// let num = [1, 5, 4, 10, 0, 3];
// console.log(num.indexOf(4));

// // Task 3
// let num = [1, 3, 5, 10, 20];
// num = num.join(' ');
// console.log(num);

// // Task 4
// let arr = [];
// for (let i = 0; i <= 2; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j <= 2; j++) {
// 	arr[i].push(1);
// }
// }
// console.log(arr);

// // Task 5
// let num = [1, 1, 1];
// num.push(2,2,2);
// console.log(num);

// // Task 6 
// let num = [9, 8, 7, 'a', 6, 5];
// num.sort();
// num.pop();
// console.log(num);

// // Task 7
// let num = +prompt("Введите число от 1 до 10");
// let numbs = [9, 8, 7, 6, 5];
// let search = numbs.includes(num);
// console.log(search);

// // Task 8
// let str = 'abcdef';
// let words = str.split('');
// words = words.reverse();
// words = words.join('');
// console.log(words);

// // Task 9
// const arr = [[1, 2, 3,],[4, 5, 6]];
// console.log(arr.flat());
// Хз можно ли сипользовать flat?

// // Task 10
// const arr = [9, 8, 7, 6, 2, 3]; 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + arr[i+1]);
// }

// // Task 11
// const arr = [9, 8, 7, 6, 2, 3];
// function arrMap(arr) {
//     return arr.map((el) => el ** 2);
// }
// console.log(arrMap(arr));

// // Task 12
// const arr = ['Массив', 'Цикл', 'Функция', 'Переменная'];
// function arrMap(arr) {
//     return arr.map((str) => str.length);
// }
// console.log(arrMap(arr));

// // Task 13
// function filterPositive(array) {
//     const result = array.filter((el) => el < 0 );
//     return result;
// }
        
// filterPositive([-1, 0, 5, -10, 56]);
// filterPositive([-25, 25, 0, -1000, -2]);




