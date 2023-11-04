// //Задание 1
// let firstNum = Number (prompt("Напишите первое число"));
// let secondNum = Number (prompt("Напишите второе число"));

// function compare(firstNum, secondNum) {
//     if (firstNum < secondNum) {
//         return firstNum;
//     } else {
//         return secondNum;
//     }
// }

// console.log(compare(firstNum, secondNum));

// //Задание 2
// let numTask2 = Number (prompt("Какое число нужно проверить?"));

// function checkEven(numTask2) {
//     if (numTask2% 2 === 0) {
//         return "Число четное";
//     } else {
//         return "Число нечетное";
//     }
// }
// alert(checkEven(numTask2));

// //Задание 3.1
// let numTask3 = Number (prompt("Какое число нужно возвести в крадрат?"));

// function square(numTask3) {
//     console.log(numTask3 ** 2);
// }

// square(numTask3);

// //Задание 3.2
// let numTask3 = Number (prompt("Какое число нужно возвести в крадрат?"));

// function square(numTask3) {
//     return numTask3 ** 2;
// }

// alert(square(numTask3));

// //Задание 4
// "use strict"
// let age = Number(prompt("Сколько Вам лет?"));
// let printMessage;


// if (age < 0) {
//     printMessage = function() {
//         alert("Вы ввели неправильное значение");
//     }

// } else if (age <= 12) {
//     printMessage = function() {
//         alert("Привет, друг!");
//     }

// } else {
//     printMessage = function() {
//         alert("Добро пожаловать!");
//     }
// }

// printMessage();

// //Задание 5
// let firstNumTask5 = Number(prompt("Напишите первое число"));
// let secondNumTask5 = Number(prompt("Напишите второе число"));

// function mult(firstNumTask5, secondNumTask5) {
//     if (isNaN(firstNumTask5) || isNaN(secondNumTask5)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return "Произведение чисел - " + firstNumTask5 * secondNumTask5; 
//     }
// }
// console.log(mult(firstNumTask5, secondNumTask5));

// //Задание 6
// let numTask6 = Number(prompt("Напишите число"));


// function exponent(numTask6) {
//     if (isNaN(numTask6)) {
//         return "Переданный параметр не является числом";
//     } else {
//         return numTask6 + " в кубе равняется - " + numTask6**3; 
//     }
// }
// console.log(exponent(numTask6));


// //Задание 7
// let radius1 = Number(prompt("Укажите радиус первой окружности в сантиметрах"));
// let radius2 = Number(prompt("Укажите радиус второй окружности в сантиметрах"));

// function getCircleArea() {
//     return 3.14*this.radius ** 2;
//   }
//   function getCirclePerimeter() {
//     return 2*3.14*this.radius;
//   }
  
//   const circle1 = {
//     radius: radius1,
  
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//   };
  
//   const circle2 = {
//     radius: radius2,
  
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//   };
  
//   console.log("Площадь внутри первой окружности равна - " + circle1.getArea() + " квадратных сантиметров");
//   console.log("Длина первой окружности " + circle1.getPerimeter() + " сантиметров");
//   console.log("Площадь внутри первой окружности равна - " + circle2.getArea() + " квадратных сантиметров");
//   console.log("Длина второй окружности " + circle2.getPerimeter() + " сантиметров");
