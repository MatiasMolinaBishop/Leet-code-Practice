// You need to write a function, that returns the first non-repeated character in the given string.
// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.
// You can assume, that the input string has always non-zero length.
const firstNonRep = (str) => {
    //let str = 'hoolh'
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

    //THIS IS A WA Y OF ITERATING THROUGH OBJECTS

    for (const key in obj) {
        if (obj[key] === 1) {
            answer = key
            break
        } else {
            answer = null
        }
    }

    //ALLBELOW HERE IS PRATICE WITHIN THIS FUNCTION
    //This returns an array of all values on the object


    // console.log(Object.values(obj))
    // console.log(Object.values(obj).length)

    let allUniqueCheck = Object.values(obj).reduce((acc, currentValue) => {
        return acc + currentValue

    }, 0)
    console.log(allUniqueCheck)

    if (allUniqueCheck === Object.values(obj).length) {
        console.log('if check did happen')
        answer = str[0]
    }


    ///if (Object.values(obj))
    //console.log(`THE CHARACTER NOT REPEATED IS: ${answer}`)
    return `THE CHARACTER NOT REPEATED IS: ${answer}`
    //NOT SURE IF THIS WOULD ENTIRELY WORK AS OBJ ARE NOT ORDERED
}
//let str = 'hoolh'
//console.log(firstNonRep(str))
//OBJECTS are unordered so maybe not the best idea. Lets try a different approach
//LETS TRY BY LOOPING INISDE A LOOP
const uniqueCharacter = (str) => {

    for (let i = 0; i < str.length; i++) {
        let answer = false
        //I want to loop again to compare each letter to to the next ones on the array
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                answer = false
                //break
            } else {
                answer = true
                //As long as the word letter or number is not repeated answer = true
                //If this condition holds throought the entire iteration of the second loop it means that index value is unique so we return it
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
            //When i is 0 and j is 0 we use continue to basically skip that loop and not do anything. 
            //This takes care of us thiking that it is being repeated when compared to itself
            if (i === j) {
                continue
            }
            //If we find a character that is equal to any of the remaining ones we break ouf of that loop.Therefore we would start comparing the next character
            //next index with the remaining ones
            if (str[i] === str[j]) {
                break
            }
        }
        //after each index character has been looped and compared for equality if j === str.length it means that the loop was never broken and therefore that character is unique
        if (j === str.length)
            return str[i]
    }
    return null
}

//console.log(youtubeAnser('aabb', 0, 0))

//I PREFARE THE SECOND PPROACH

//console.log('TEST / PTACTICE')

//console.log(firstNonRep('hola'))

//TESTING 2ND SOLUTION ON MY OWN DOES NOT WORK!!!!

const loopLopp = (str) => {
    //I want to loop inside the loop to check each letter with the remaining ones
    //Initially i set up a condition which will change only if while im looping whatever i specify happens
    //If a letter loops all the way through the str it means that letter is unique

    let answer = null


    for (let i = 0; i < str.length; i++) {

        let check

        //console.log(loopLopp('xhxoolaa'))

        for (let j = i + 1; j < str.length; j++) {
            console.log(str[i])
            console.log(str[j])
            if (str[i] === str[j]) {
                console.log(str[i], str[j])
                console.log('BINGBANG!!!!')
                check = true
                break
            }
            else {
                console.log('what')
                console.log(str[i], str[j])
                check = false
            }
        }

        if (check === false) {
            answer = str[i]
            console.log('SOOO WHAT?')
            console.log(`here this letter ${answer} is false?`)
            //return str[i]
            break
        }
    }

    return answer
}
//hollaaah
//console.log('NEW TEST')

//console.log(loopLopp('xfxfgxhhooylaa'))


//I want compare each leter in the string to the ramining ones
//I need to loop inside the loop
//I must set a cindition that lets me know when a letter appears again on the str
//If a letter loops arounf the inned loop and it never finds another letter like it it means it is unique
//We will handle this by breaking over the loop when an equal is found

const nonRep = (str, i, j) => {

    for (i = 0; i < str.length; i++) {

        for (j = 0; j < str.length; j++) {
            if (i === j) {
                continue
            }
            if (str[i] === str[j]) {
                break
            }
        }

        if (j === str.length) {
            return `${str[i]} is the first non repeated character`
        }
    }

    return console.log('ALL ARE UNIQUE')

}

console.log(nonRep('hholalxoa', 0, 0))

let testTest = ['mongo', 'mongo', 'linux', 'java', 'mongo']
let count = 0

for (let i = 0; i < testTest.length; i++) {

    if (testTest[i] === 'mongo') {
        count++
    }

    console.log(count)
}

console.log(count)