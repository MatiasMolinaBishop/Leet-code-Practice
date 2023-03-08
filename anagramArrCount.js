function anagramCounter(wordsArray) {

    //We create an empty object because we want to store the words that are anagrams and be able to 
    //keep trak if the word that correspond to such anagrams (Key Value pairs)

    let wordsObject = {}

    //We know we want to iterate through the arr so that we can compare the words to one another
    //Initialize a variable called key where we save each word as we iterate through the arr with the word sorted. 
    //Once we sort the words its easy to compare for equality with other words

    wordsArray.forEach(word => {
        //sort() works on arr so we first split the words into an arr separated at ''. We must finally join it into a string after its sorted
        let key = word.split('').sort().join('')

        //We create a conditional to check if the sorted word / key exists on the object
        //Intially object is empty so first condition is met, adding that word as key and the value of 1 as it meas the word at this point only appears once on arr
        //ex: wordsObject['bac'] would return the value of 'abc' on the object like {'abc':2} => 2

        if (!wordsObject[key]) {
            wordsObject[key] = 1
        } else {
            //if the object already contains a key value pair for the sorted word we are iterarting then we add 1 to that value 
            wordsObject[key]++
        }

    })
    //let counter = for
    //At this point wordsObject will be an object containing keys for the possible anagrams soretd and the number of times those words repaat as keys
    console.log(wordsObject)
    //We want to save the keys that contain the number of times the words reaptthemselves as an arr so that we can count those and reventually return that value
    //Object.values(wordsObject) method returns an arr with the values of such object called upon
    let valuesArr = Object.values(wordsObject)
    console.log(valuesArr)
    //We intiate a counter to keep track of the number of anagrams
    //We iterate throgh this mew arr and we change the values of the counter accordingly to certain conditions

    let counter = 0

    for (let i = 0; i < valuesArr.length; i++) {
        // if (valuesArr[i] === 2) {
        //     counter = counter + (valuesArr[i] - 1)
        // } else if (valuesArr[i] > 2) {
        //     counter = counter + valuesArr[i]
        // }

        if (valuesArr[i] === 2 || valuesArr[i] > 2) {
            counter = counter + valuesArr[i]
        }

    }

    return counter;
}

console.log(anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']))