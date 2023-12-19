// const fibonacci = [1, 1, 2, 3, 5, 8];

// const multipleByTwoFib = fibonacci.map((el, index) => el * 2);

// console.log (multipleByTwoFib);

// const plusTenFib = fibonacci.map((el) => el + 10);

// console.log(plusTenFib);

// const onlyBigFib = fibonacci.filter((el) => el > 3);

// console.log(onlyBigFib);



// //Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  let peopleSort = people.sort((a, b) => a.age - b.age);

//  console.log(peopleSort);


//Задание 2

function isPositive(el) {
    return el > 0;
    }

    function isMale(el) {
    return el.gender === 'male';
    }

    function filter(arr, func) {
    
    let result = [];

    for (let i = 0; i < arr.length; i++) {
   
        if (func(arr[i])) {
        result.push(arr[i]);
    } 

    }
    return result;
    }

    console.log(filter([3, -4, 1, 9], isPositive));

    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];

     console.log(filter(people, isMale)); 
// 
// Задание 3

// let timeId = setInterval(() => console.log(new Date), 3000);

// setTimeout(() => {clearInterval(timeId); console.log('30 секунд прошло')}, 30000);

// // Задание 4
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
  
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function () {
    sayHi('Глеб');
})