const CountVowels = (str) => {

    let count = 0

    //It would be good to lowercase or uppercase the str. That way we can count for all vowels

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }

    return `There are ${count} vowels on the string`

}

console.log(CountVowels('hola como estas?'))

//Same result bit more advanced approach

const CountVowelsTwo = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    //for of is very similar to forEach but for strngs. It allows to iterate trough string. 
    //Here letter represents the each letter and str is the string which we mutate to all lowercase so that we can check if its inluded on the vowels arr

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }

    return `The tested string conatains ${count}`
}

console.log(CountVowelsTwo('hola como estas?'))
//HOW FOR OF LOOP WORKS IN JAVASCRIPT
// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//EVEN MORE ADVANCED WAY OF SOLVING THIS EXCERCISE WITH REDUCE


const CountVowelsThree = (str) => {

    let vowels = ['a', 'e', 'i', 'o', 'u']

    let answer = str.toLowerCase().split('').reduce((acc, letter) => {
        if (vowels.includes(letter)) {
            acc++
        }
        return acc

    }, 0)//Initially setting the acc to 0

    return `The str tested with reduce has ${answer} vowels`
}
console.log(CountVowelsThree('hola como estas?'))

//PRACTICE REDUCE

let test = ['hola', 'hi', 'hallo']
let reduceCheck = 'Hi how are you?'

let reducer = reduceCheck.toLocaleLowerCase().split(' ').reduce((acc, word) => {
    if (test.includes(word)) {
        acc++

    }
    return acc
}, 0)

console.log(reducer)