//Задание 1
let i = 1;
while (i<=2) {
    console.log("Привет");
    i++;
}

//Задание 2
let digit = 1;
do {
    console.log(digit);
    digit++;
} while (digit<6);

//Задание 3
// let numb = 7;
// do {
//     console.log(numb);
//     numb++;
// } while (numb<=22);

for (let numb = 7; numb <=22; numb++){
    console.log(numb); 
}

//Задание 4
let obj = {
    "Коля" : "200",
    "Вася" : "300", 
    "Петя" : "400"
}
for (let salary in obj) {
    console.log(`${salary} - зарплата ${obj[salary]} долларов.`);
}

//Задание 5

let n = 1000;
let num = 0;
while ((n/2)>=50) {
    n/=2;
    num++;
}
console.log(`Наименьшее частное до 50 будет ${n}, а число итераций будет ${num}`);

//Задание 6

for (let friday = Number(prompt("Укажите число первой пятницы месяца")); friday <= 31; friday+=7) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}
