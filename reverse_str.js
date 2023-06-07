//REVERSE THE STRING

let reverseString = (str) => {

    let reversedArr = [...str].reverse().join('')

    return reversedArr
}

console.log(reverseString('Hi my name is Matias'))


const reverseWords = (str) => {

    console.log(str.split('').reverse().join('').split(' ').reverse().join(' '))
    console.log(str.split(' ').reverse().join(' '))

    return str.split('').reverse().join('')

}
console.log(reverseWords('Hi my name is Matias'))

//Depending on what they want as an output try the above solutions 
// saitaM si eman ym iH
// iH ym eman si saitaM
// Matias is name my Hi
// saitaM si eman ym iH
//Above are the results of the 4 conosle logs..
//I got this