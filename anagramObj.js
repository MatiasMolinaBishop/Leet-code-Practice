//create a function that counts how many anagrams we are on an array 

let arr = ['hola', 'ahol', 'chao']

const anagram = (arr) => {

    let = obj = {}

    const sortedArr = arr.map((word) => {
        return word.split('').sort().join('')
    })

    console.log(sortedArr)

    for (let i = 0; i < sortedArr.length; i++) {
        if (obj[sortedArr[i]] === undefined) {
            obj[sortedArr[i]] = 1
        } else {
            obj[sortedArr[i]]++
        }
    }

    let arrAnagrams = Object.values(obj)

    let counter = 0

    for (let i = 0; i < arrAnagrams.length; i++) {
        if (arrAnagrams[i] >= 2) {
            counter++
        }
    }



    return counter


}

console.log(anagram(['hola', 'ahol', 'chao']))

//FIRST NON REPEATED STRING IN ARR

let arr2 = ['hola', 'chao', 'hola', 'pedro']

const nonRep = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let counter = 0

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {
                counter++
                break
            }

        }

        if (counter === 0) {
            return arr[i]
        }
    }

    return console.log('THERE ARE NO NON REPEATED')
}

console.log(nonRep(['hola', 'chao', 'hola', 'pedro', 'chao']))

const firstRep = (arr) => {

    let obj = {}

    for (let i = 0; i < arr.length; i++) {

        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
            console.log(obj)
        } else {
            return arr[i]
        }
    }

    return 'ALL ARE UNIQUE'

}
console.log(firstRep(['hola', 'chao', 'hola', 'pedro', 'chao']))

const firstDuplicate = (arr) => {

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            return arr[i]
        }
    }

    return 'There are no duplicates on the gieven array'
}

console.log(firstDuplicate(['hola', 'chao', 'hola', 'pedro', 'chao']))