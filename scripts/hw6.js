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
for(let i = 0; i <= 2; i++) {
    array.push([1, 1, 1]);
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

// // Дарья, почему так работает не корректно?
// for ( i = 0; i < sortNumbs.length; i++)
// {
//    if (isNaN(sortNumbs[i]));
//    {
//     sortNumbs.pop(i);
//   }
//  }

sortNumbs.sort().pop();

console.log(sortNumbs);