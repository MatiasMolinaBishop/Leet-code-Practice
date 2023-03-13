const arr = ['pedro', 2, { name: 'Matias' }, 5, 'testing']

console.log(arr)

const addToArr = (arr, adding) => {

    //We use the spread orperator to spread all the elements of the array into a new arr. Then we can add something to it but putting it after the ,

    return [...arr, adding]
}

console.log(addToArr(arr, 3))
console.log(addToArr(arr, [3, 3, 6]))

let obj = {
    name: 'Jenny',
    lName: 'Jacobs',
    age: 19
}

console.log(addToArr(arr, obj))

//important to use the spread operator and not push as it is not good practice to mutate the original data.
//Concatenate 2 arrays

const ConcatenateArrays = (arr1, arr2) => {
    //Concatenating 2 arrays
    return [...arr1, ...arr2]
}

console.log(ConcatenateArrays([1, 2, 3], [4, 5, 6]))