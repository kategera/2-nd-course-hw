//Задание 1
let password = '12tri45';
let userpass = prompt("Введите пароль");
if (password === userpass) {//
    alert("Пароль введен верно")
} else {
    alert("Пароль введен неправильно")
};

//Задание 2
let c = Number(prompt("Введите число"));
let resalt = c>0 && c<10 ? console.log("Верно") : console.log("Неверно");

//Задание 3
let d = Number(prompt("Введите первое число"));
let e = Number(prompt("Введите второе число"));
let resalt100 = d>100 || e>100 ? console.log("Верно") : console.log("Неверно");

//Задание 4
let a = '2';
let b = '3';
console.log(Number(a)+Number(b));

//Задание 5
let monthNumber = prompt("Введите порядковый номер месяца");
switch (monthNumber) {
    case "1":
    case "2":
    case "12":    
        console.log("Зима");
        break;
    case "3":
    case "4":
    case "5":    
        console.log("Весна");
        break;
    case "6":
    case "7":
    case "8":    
        console.log("Лето");
        break;
    case "9":
    case "10":
    case "11":    
        console.log("Осень");
        break;
    default:
        console.log("Данные введены некорректно");
        break;
}

//Задание 7
let num = Number(prompt("Пожалуйста, введите любое число"));
if (num % 2===0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

//Задание 8
let clientOS_8 = Number(confirm("Вы используете Android?"));
clientOS_8 === 1 ? console.log("Установите версию приложения для Android по ссылке") : console.log("Установите версию приложения для iOS по ссылке");

//Задание 9
let clientOS = Number(confirm("Вы используете Android?"));
let clientDeviceYear = Number (prompt("Напишите год выпуска вашего телефона"));

if ((clientOS === 1) && (clientDeviceYear >= 2015)) {
    console.log("Установите версию приложения для Android по ссылке");
} else if ((clientOS === 1) && (clientDeviceYear < 2015)) {
    console.log("Установите облегченную версию приложения для Android по ссылке");
} else if ((clientOS !== 1) && (clientDeviceYear >= 2015)) {
    console.log("Установите версию приложения для iOS по ссылке");
}  else if ((clientOS !== 1) && (clientDeviceYear < 2015)) {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
}
