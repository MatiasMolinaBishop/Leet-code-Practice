//Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
//For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.



function mostLikely(prob1, prob2) {
    // your code
    let p1 = prob1.split('')
    let p2 = prob2.split('')

    if (p1[2] < p2[2]) {
        return true
    } else {
        return false
    }
}

console.log(mostLikely('1:9', '1:7'))

//This would only work if the probability stays with 1:1 - 1:9
//To check for others we would have to add conditionals