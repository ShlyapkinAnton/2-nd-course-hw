// task 1
let password = 'пароль';
let a = prompt('Ведите пароль')
if (a === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}
// task 2
let c = -3;
if (c > 0 && c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}
// task 3
let d = 105;
let e = -37;
(d > 100 || e > 100) ? alert('Верно') : alert('Неверно');
// task 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// task 5
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
//  task 7
let num = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(num) === true) {
	return 'Вы ввели дить';
} else if (num % 2 === 0) {
	return 'Число чётное';
} else {
	return 'Число нечётное';
}






