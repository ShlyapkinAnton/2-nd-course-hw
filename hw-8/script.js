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
	if (arr[arr.length - 1].toLowerCase() === questionTwo.toLowerCase()) { 
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
// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// people.sort(function (a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age < b.age) {
//     return -1;
//   }
//   return 0;
// });

// console.log(people);

// Task 2
// function isPositive(num) {
// 	return num > 0;
// }
// function isMale(arr) {
// 	return arr.filter((el) => el.gender === 'male');
// }
// function filter(arr, callback) {
// 	const res = [];
// 	arr.map((el) => callback(el) && res.push(el));
// 	return res;
// }

// function filter_one(arr, callback) {
// 	return callback(arr);
// }
// // не могу додуматься как поместить всё в один фильр функции
// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter_one(people, isMale));

// // Task 3
// const timer = (deadline) => {
//     if (isNaN(+deadline)) { 
//         return;
//     }

//     let time = deadline;
//     const interval = setInterval(() => {
//         let currentDate = new Date();
// 			console.log(currentDate);
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, deadline * 1000)
// };

// timer(30);

// // Task 4
// function delayForSecond(callback) {
// 	let timerId = setTimeout(delayForSecond, 1000);
// 	clearTimeout(timerId);
//   	callback();
// }

// delayForSecond(function() {
//   	console.log('Привет, Глеб!');
// })

// // Task 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'))