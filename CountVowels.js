const CountVowels = (str) => {

    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }

    return `There are ${count} vowels on the string`

}

console.log(CountVowels('hola como estas?'))

//Same resuly bit more advamced approach

const CountVowelsTwo = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

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

    }, 0)

    return `The str tested with reduce has ${answer} vowels`



}
console.log(CountVowelsThree('hola como estas?'))
