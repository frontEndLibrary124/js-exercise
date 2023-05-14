let person = {
    name: 'Jhon',
    age: 24,
    gender: 'male'
}

let {name: personName, age: personAge, gender: personGender} = person;
console.log(personName, personAge, personGender);