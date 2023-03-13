const ContainsDuplicates = (arr) => {
    //loop through the arr
    //Create an empty obj where i will save the elemnets of teh arr if they dont exist giving them a value of 1
    //As im looping if the element already exists I will add 1 to that value
    //Chheck the values to see if any of them is > 1 meaning these element repeats

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        // if (obj[arr[i]] === undefined) {
        //     obj[arr[i]] = 1
        // } else {
        //     obj[arr[i]]++
        // }
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 'it exists'
        } else {
            return true
        }

    }

    // let arrValues = Object.values(obj)
    // console.log(arrValues)
    // console.log(Math.max(...arrValues))

    // if (Math.max(...arrValues) > 1) {
    //     return true
    // } else {
    //     return false
    // }
    return false
}

console.log(ContainsDuplicates([2, 4, 6, 7, 9, 5, 1, 4]))

//ANOTHERWAY OF CREATING THIS FUNCTION

const ContainsDuplicatesEfficient = (arr) => {
    arr.sort()

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return true
        }
    }

    return false
}

console.log(ContainsDuplicatesEfficient([2, 4, 6, 7, 9, 5, 1, 4]))