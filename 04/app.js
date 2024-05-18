const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '19',
        month: '05',
        year: '2024'
    }
}

const month = (new Date().getMonth() + 1);
const day = (new Date().getDate());

const dayString = day < 10 ? '0' + day : '' + day;
const monthString = month < 10 ? '0' + month : '' + month;


if(user.born.day === dayString && user.born.month === monthString) {
    console.log('Dziś są urodziny użytkownika');
} else {
    console.log('Nie ma urodzin');
}