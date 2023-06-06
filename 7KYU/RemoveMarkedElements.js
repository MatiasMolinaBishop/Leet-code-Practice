//Remove All The Marked Elements of a List

//Define a method/function that removes from a given array of integers all the values contained in a second array.
//Examples (input -> output):
//* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
//* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
//* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

const removeContained = (mainArr, removeArr) => {
    //I need to iterate through the main arr and check to see if the elements are included on the scond parameter arr
    //We can use the includes method
    //If the integer is not on the second arr push into a new arr
    //An integer can be repeated as long as it is not on the arr to be removed ex newArr = [2, 2, 4]
    //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

    let newArr = []

    for (let i = 0; i < mainArr.length; i++) {
        if (!removeArr.includes(mainArr[i])) {
            newArr.push(mainArr[i])
        }
    }

    return newArr

}

//console.log(removeContained([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))


const onOwn = (arr1, arr2) => {

    //I could loop inside the loop to compare each element on the first arry with those of the second
    //i woudl create a new empty arr into whihch i woudl push only numbers that are not repeated

    let newArr = []

    for (let i = 0; i < arr1.length; i++) {
        let count = 0
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                break
            }
            count++
        }
        if (count === arr2.length) {
            newArr.push(arr1[i])
        }
    }
    return newArr
}

console.log(onOwn([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))


const includesMethod = (arr1, arr2) => {

    let newArr = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(`${arr1[i]} to be removed`)
        } else {
            newArr.push(arr1[i])
        }
    }

    return newArr

}

console.log(includesMethod([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))