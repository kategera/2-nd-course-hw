//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let firstIphone = 2007;
alert("Год выпуска первого Айфона - " + firstIphone);

//Задание 3
let creatorJS = "Брендан Эйх";
alert("JS создал " + creatorJS);

//Задание 4
let ten = 10;
let two = 2;
alert(ten + two);
alert(ten-two);
alert(ten*two);
alert(ten/two);

//Задание 5
let resalt = two**5;
alert(resalt);

//Задание 6
let aa = 9;
let b = 2;
let modul = aa % b;
alert(modul);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert("Ваш возраст " + age + " лет");

//Задание 9.0
let user = {
	name: 'Марк',
	age: 7,
    isAdmin: false
}

//Задание 9.1
user['city of residence'] = "Богородицк";

//Задание 9.2
user['age'] = 8;

//Задание 9.3
delete user['city of residence'];

//Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10
let clientName = prompt("Добрый день! Как ваше имя?");
alert("Привет, " + clientName +" !");