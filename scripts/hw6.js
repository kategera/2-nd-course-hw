//Задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
    }

//Задание 2

const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));

//Задание 3

const joinNumbs = [1, 3, 5, 10, 20];
console.log (joinNumbs.join(' '));

//Задание 4

const array = [];
for (let i = 0; i <= 2; i++) {
    array[i] = [];
    for (let j = 0; j <= 2; j++) {
        array[i][j] = 1;
    }
}
console.log(array);

//Задание 5

const arr = [1,1,1];
console.log(arr.concat([2, 2]));

// //или
// for(let i = 0; i <= 1; i++) {
//     arr.push(2);
// }
// console.log(arr);


//Задание 6

const sortNumbs = [9, 8, 7, 'a', 6, 5];

sortNumbs.sort().pop();

console.log(sortNumbs);


//Задание 7

const playArr = [9, 8, 7, 6, 5];
let playNumb = Number(prompt('Угадай число'));

if (playArr.includes(playNumb)) {
    alert('Угадал');

} else {
    alert('Не угадал');
}


//Задание 8

let line = 'abcdef';

let arrayLine = line.split('').reverse();

let backToLine = arrayLine.join('');

console.log(backToLine);


//Задание 9

const arrOne = [1, 2, 3,];
const arrTwo = [4, 5, 6];

const arrOneTwo = arrOne.concat(arrTwo);
console.log(arrOneTwo);


//Задание 10

const arrSample = [5, 3, 1, 2, 4];

for (let i = 0; i < arrSample.length-1; i++) {
    
    console.log(arrSample[i] + arrSample[i+1]);
    
    }


//Задание 11

const arrParent = [2, 16, 8, 7, 21];

let arrSquare = arrParent.map(item => (item**2));

console.log(arrSquare);


//Задание 12

const arrWords = ['вороне', 'гдето', 'Бог', 'послал', 'кусочек', 'сыру'];


let a = arrWords[0].length;
let arrWordsLength = [];


for(let i = 0; i <= arrWords.length-1; i++) {

    arrWordsLength.push(arrWords[i].length);

}

console.log(arrWordsLength);


//Задание 13

const arrAny = [-1, 0, 5, -10, 56];

let arrNegativ = arrAny.filter(item => item < 0);

console.log(arrNegativ);

//Задание 14

let arr14 = [];

for (let i = 0; i < 10; i++) {
    arr14.push(Math.round(Math.random() * 10))
}

console.log(arr14);

let arr14Even = [];

for(let i = 0; i < arr14.length-1; i++) {

    if (arr14[i] % 2 === 0) {

        arr14Even.push(arr14[i]);

    }
}
console.log(arr14Even);


//Задание 15

let arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.round(Math.random() * 10))
}

console.log(arr15);

let sum = 0;
let average = 0;

for (let i = 0; i < arr15.length - 1; i++) {
    sum += arr15[i];
}

average = sum / arr15.length;

console.log(average);
