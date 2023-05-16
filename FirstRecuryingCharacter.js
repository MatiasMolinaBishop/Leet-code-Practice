//Create a function that accpets an array as argument and returns the first element of that array
//that repeats its self
//[2,4,7,2,4,6,9,0,3,5] =======> output 2 !

const firstDuplicate = (arr) => {

    //I want to iterate trough this arr and keep track of its elements
    //If an element is reocurrying I want to retunr that element
    //In order to keep track of these elements and the number of times they appear I can use a hash table / object
    //Start by creating an empty oject and adding the elemnts on the arr as keys and the number of times they repar as values

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            //IF THE arr[i] is not undefined it means its repeating and as we are looping through the arr and arr are oderred it would mean is the 1st to be reocurrying
            return arr[i]
        }
    }

    return 'There are no duplicates on the gieven array'
}

console.log(firstDuplicate([2, 4, 4, 2, 4, 6, 9, 0, 3, 5]))


//WORKING AROUND WITH HASH TABLES
let obj2 = {
    name: 'Matias',
    age: 30
}
console.log(obj2)
obj2['something'] = 'Mercedes'
console.log(obj2)
console.log(obj2[4])
obj2[4] = 4
console.log(obj2)