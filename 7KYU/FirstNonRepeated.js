// You need to write a function, that returns the first non-repeated character in the given string.
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
// You can assume, that the input string has always non-zero length.
const firstNonRep = (str) => {
    //I need to check the characters and if they are repeated. This means I need to loop over the str
    //I need to save each charater inside an object to check each element as key and the number of times it repeats as their value
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1
        } else {
            obj[str[i]]++
        }
    }
    console.log(obj)
    let answer
    for (const key in obj) {
        if (obj[key] === 1) {
            answer = key
        } else {
            answer = null
        }
    }
    console.log(answer)
    return answer
}
//let str = 'hoolh'
//console.log(firstNonRep(str))
//OBJECTS are unordered so maybe not the best idea. Lets try a different approach
//LETS TRY BY LOOPING INISDE A LOOP
const uniqueCharacter = (str) => {
    //let unique = false
    for (let i = 0; i < str.length; i++) {
        let answer = false
        //I want to lpp again to compare each letter to to the next ones on the array
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                answer = false
                //break
            } else {
                answer = true
            }
        }
        if (answer === true) {
            return str[i]
        }
    }
    return answer
}
//console.log(uniqueCharacter(str))
//SOLUTION FROM YOUTUBE...

const youtubeAnser = (str, i, j) => {
    //We loop inside a loop to comoprae each character with the remainign characters on the string
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < str.length; j++) {
            //When i is 0 and j is 0 we use continue to basically sip that loop and not do anything
            if (i === j) {
                continue
            }
            //If we find a character that is equal to the any of the remaining ones we break ouf of that loop.Therefore we would them start comparing the next character
            //next index with the remaining ones
            if (str[i] === str[j]) {
                break
            }
        }
        //after each index xharacter has been looped and comprad for equality if j === str.length it means that the loop was never broken and therefore that character is unique
        if (j === str.length)
            return str[i]
    }
    return null
}

console.log(youtubeAnser('aabb', 0, 0))

