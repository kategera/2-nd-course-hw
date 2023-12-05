const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arrSort = arr.sort(() => Math.random() - 0.5);

function showWords() {
   alert(`${arrSort}`);
   let answerUser1 = prompt(`Чему равнялся первый элемент массива?`);
   let answerUser2 = prompt(`Чему равнялся последний элемент массива?`);
   const answer1 = arr[0];
   const answer2 = arr[6];


   if (answerUser1.toLowerCase() === answer1.toLowerCase() && answerUser2.toLowerCase() === answer2.toLowerCase()) { 
	alert('Ура! Ты угадал'); 
 
} else if (answerUser1.toLowerCase() === answer1.toLowerCase() || answerUser2.toLowerCase() === answer2.toLowerCase()) {
    alert('Вы были близки к победе!');

} else {
     alert('Увы, это неверные ответы');
}
}
   
