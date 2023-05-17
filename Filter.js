const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
];

// your code...

const ofDrinkingAge = people.filter((person) => {
    return person.age >= 21

})





console.log(ofDrinkingAge);
// [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Nettie', age: 21 }
// ]

//Given an array of numbers, filter out the ones that are not even, and are greater than 42.

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

// your code...
let odd = numbers.filter((number) => {
    return number % 2 !== 0 && number > 42
})

console.log(odd);
// [ 123, 99, 73, 45 ]
