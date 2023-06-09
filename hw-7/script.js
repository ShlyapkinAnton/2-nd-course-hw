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
function game__two() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	let score = 0;
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    questionOne = prompt("Чему равнялся первый элемент массива?");
	if (arr[0].toLowerCase() === questionOne.toLowerCase()) {
		alert('Верно');
		score++;
	} else {
		alert('Неверно');
	};

	questionTwo = prompt("Чему равнялся последний элемент массива?");
	if (arr[6].toLowerCase() === questionTwo.toLowerCase()) {
		alert('Верно');
		score++;
	} else {
		alert('Неверно');
	};

	if (score === 2) {
		alert('Поздравляю, вы правильно ответили на все вопросы!');
	} else if (score === 1) {
		alert('Вы были близки к победе!');
	} else {
		alert('Вы проиграли. Повезет в следующий раз.');
	}
}

// // Task 1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);

// // Task 1 v2
// console.log('js'.toUpperCase());

// // Task 2
// const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// searchStart.forEach((searchStart) => {
//     if (searchStart.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) {
//         console.log(searchStart);
//     }
// });

// // Task 3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

// // Task 4
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// // Task 5 не включительно
// function getRandomInt(minValue, maxValue) {
//     return Math.random() * maxValue;
// }
// console.log(getRandomInt(1, 10));

// // Task 5 v2 включительно
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * maxValue);
// }
// console.log(getRandomInt(1, 10));

// // Task 6
// function getRandomArrNumbers(num) {
//     let arr = [];
//     ocr = Math.floor(num/2);
//     for (i = 0; i < ocr; i++) { 
//         arr.push(Math.round(Math.random() * num));
//     }
//     return arr;
// }
// console.log(getRandomArrNumbers(7));

// // Task 7
// function getRandomNumbersOut(Value1, Value2) {
//     return Math.round(Math.random() * (Value2 - Value1)) + Value1;
// }
// console.log(getRandomNumbersOut(7, 32))

// // Task 8
// let currentDate = new Date();
// console.log(currentDate);

// // Task 9
// let currentDate = new Date();
// let nextDay = 73;
// currentDate.setDate(currentDate.getDate() + nextDay);
// console.log(currentDate);

// // Task 10
// function date() {
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date();
// let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
// let fullDate1 = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
// console.log(fullDate);
// console.log(fullDate1);
// }
// date();

