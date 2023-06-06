function game__one() {
    let monthNumber = prompt('Укажите номер месяца');
switch (monthNumber) {
	case '12':
	case '1':
	case '2':
		alert('Зима');
		break;
    case '3':
	case '4':
	case '5':
		alert('Весна');
		break; 
    case '6':
	case '7':
	case '8':
		alert('Лето');
		break; 
    case '9':
	case '10':
	case '11':
		alert('Осень');
		break;
	default: alert('Что-то тебя совсем далеко унесло');
		break;
}
}
retur
// // Task 1
// function task (a, b) {
// 	if (a < b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// console.log(task(8,4));
// // Task 2

// function task(n) {
// 	if (n % 2 == 0) {
// 		console.log('Число четное');
// 	} else {
// 		console.log('Число нечетное');
// 	}	
// }
// task(32)

// // Task 3.1
// function task(a) {
// 	console.log(a ** 2);	
// }
// task(6)

// Task 3.2
// function task(a) {
// 	return a ** 2;	
// }
// console.log(task(4));
// task(6)

// Task 4
// function task() {
// 	let age = prompt('Сколько вам лет?');
// if (age < 0) {
// 	alert('Вы ввели неправильное значение');
// } else if (age <= 12) {
// 	alert('Привет, друг!');
// } else if (age >= 13) {
//  	alert('Добро пожаловать!');
// }
// }
// task();

// // Task 5
// function task(a, b) {
// 	if (isNaN(a) === false || isNaN(b) === false) {
// 		return console.log(a * b);
// 	} else {
// 		return console.log('Одно или оба значения не являются числом');
// 	}
// }
// task(0,-3)

// // Task 6
// function task() {
// 	let num = prompt('Напишите число');
// 	if (isNaN(num) === false ) {
// 		alert(`${num} в кубе равняется ${num ** 3}`) 
// 	} else {
// 		alert('Переданный параметр не является числом')
// 	}
// }
// task();

// // Task 7
// function getRectangleArea() {
// 	return 3.14 * this.radius ** 2
// }
// function getRectanglePerimeter() {
// 	return 2 * 3.14 * this.radius
// }
// const circle1 = {
// 	radius: 3,
// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// };
// const circle2 = {
// 	radius: 5,
// 	getArea: getRectangleArea,
// 	getPerimeter: getRectanglePerimeter,
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());
	