// write the function isAnagram

const isAnagram = (test, original) => {
    let testUp = test.toUpperCase()
    let originalUp = original.toUpperCase()


    return [...testUp].sort() === [...originalUp].sort()

}

console.log(isAnagram("ound", "round"))

//COMPLETE THIS CHALLANGE TOMORROW TUESDAY
//https://www.codewars.com/kata/587e18b97a25e865530000d8