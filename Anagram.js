// write the function isAnagram
//a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

const isAnagram = (test, original) => {
    //We first make both words all in uppercase. 
    //In order to chekc if the words are anagrams we have to make sure that all the letters are the same. Just in different order. 
    //To chekc this we first sort both words. If the are the same sorted it means they are nagarams of eachother. 
    //When using the built in sort() in java script CAPITALS are sorted different thats why we toUpperCase()
    let testUp = test.toUpperCase()
    let originalUp = original.toUpperCase()
    //console.log([...testUp].join(''))
    return [...testUp].sort().join('') === [...originalUp].sort().join('')
    //Sort sorts elememts of an ARRAY on place. Therefore we use teh spread operator to make this an array and be able to sort it
    //REMEMEBR - we must join('') the arryas back so that we can compare strings. Arrays and Objects even tho the values might be the same
    //They would reference a different place in memory and therefore it would always return false

}

console.log(isAnagram("ahlo", "hola"))

//COMPLETE THIS CHALLANGE TOMORROW TUESDAY
//https://www.codewars.com/kata/587e18b97a25e865530000d8s

let arrNotSort = ['a', 'g', 'f', 'k', 'm', 'q', 'b', 4, 100, 1, 0, -4]
letNumNotSort = [1, 4, 6, 8, 19, 40, 100, 4, 1, 20, 11, 21]
console.log(arrNotSort.sort())
console.log(letNumNotSort.sort())