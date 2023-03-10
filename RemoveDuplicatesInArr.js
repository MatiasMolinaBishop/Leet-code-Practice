//Remove all duplicates in the array

const removeDuplicate = (arr) => {

    //I want to be able to somehow keep track of each individual element on the arr and count how many times it exists
    //We can do this creatingan object woth the individula elements as keys and the number of times they apear on the arr as values
    //then i wamt to return an arr with only the keys of the object as it woudl contain unique vlues therefore getting rif of all duplicates

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        //obj[key] returns the value assigned to that key
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    //Object.keys(obj) is built in method that returns an arr with all the objects keys. 
    return Object.keys(obj)
}

console.log(removeDuplicate([2, 3, 4, 5, 78, 4, 3, 3, 'hola', 'hi', 'hi']))