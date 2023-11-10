function showSeasons() {
    let monthNumber = prompt("Введите порядковый номер месяца");
    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        alert ('Этот месяц зимний');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert ('Этот месяц весенний');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert ('Этот месяц летний');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert ('Этот месяц осенний');
    } else {
        alert ('Данные введены некорректно');
    }
   
}