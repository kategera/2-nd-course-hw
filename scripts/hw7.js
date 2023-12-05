//Задание 1

let str = 'js';

console.log(str.toUpperCase());

//Задание 2

//const arr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const arr = ['яблоко', 'груша', 'гриб', 'огурец'];

//const search = 'ко';
const search = 'гру';

const arrSort = [];


arr.forEach((item) => {

    if (item.toLowerCase().startsWith(search.toLowerCase())) {

        return arrSort.push(item);
    }

})

console.log(arrSort);

//Задание 3

const num = 32.58884;
let a = Math.floor(num);

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4

const arrNum = [52, 53, 49, 77, 21, 32];

function getMaxOfArray(arrNum) {
    return Math.max.apply(null, arrNum);
  }

  function getMinOfArray(arrNum) {
    return Math.min.apply(null, arrNum);
  }
console.log(`Наибольшее значение ${getMaxOfArray(arrNum)}, наименьшее значение ${getMinOfArray(arrNum)}`);

//Задание 5

function getRandom() {
    return Math.round(Math.random() * 10);
  }

console.log(getRandom());

//Задание 6

const getRandomArrNumbers = (numb) => {
 
    const arrNumbs = [];

   for (let i = 0; i <  Math.floor(numb / 2); i++) {
    
   arrNumbs.push(Math.round(Math.random() * numb));
    
   }
   return arrNumbs;
} 

console.log(getRandomArrNumbers(10));

//Задание 7

const getRandomNumber = (minNumber, maxNumber) => {

    return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);

}

console.log(getRandomNumber(17, 21));

//Задание 8
//1
let currentDate = new Date();
console.log(currentDate);

//2 (текущая дата в миллисекундах)
let myDate = new Date(); 
console.log(+myDate);

//Дата три дня назад
let days3 = 3 * 24 * 60 * 60 * 1000;
let searchDate = myDate - days3;
let daysAgo3 = new Date(searchDate);
console.log(daysAgo3)

//3 Задаем дату вручную
let myDate1 = new Date("Dec 05 2023");
console.log(myDate1);

//Задание 9
let currentDate1 = new Date("Dec 05 2023");
//let days73 = 73 * 24 * 60 * 60 * 1000;
//let searchDate1 = currentDate1 + days73;
//let daysAfter73 = new Date(searchDate1);
currentDate1.setDate(currentDate1.getDate() + 73);
console.log(currentDate1);

//Задание 10

const ruDate = (todayDate) => {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let date = todayDate.getDate();

let month = months[todayDate.getMonth()];

let year = todayDate.getFullYear();

let day = days[todayDate.getDay()];

let hour = todayDate.getHours();

let Minutes = todayDate.getMinutes();

let Seconds = todayDate.getSeconds();

return `Дата:  ${date}  ${month}  ${year} - это ${day}.
Время: ${hour}:${Minutes}:${Seconds}`;

}

console.log(ruDate(new Date()));


