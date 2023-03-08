//REVERSE THE STRING

let reverseString = (str) => {

    let reversedArr = [...str].reverse().join('')

    return reversedArr
}

console.log(reverseString('Hi my name is Matias'))