//Create a function that accpets an array as argument and retunrs the forst element of that array
//that repeats its self
//[2,4,7,2,4,6,9,0,3,5] =======> output 2 !

const firstDuplicate = (arr) => {

    //I want to ietrate tjroigh this arr and keep track of its eelements
    //If an elelemnt is reocurrying I want to retunr that elemnet
    //In order to keep track of these elements and the number of times they appear I can use a hash table
    //Start by creating an empty oject and adding the elemnts on the arr as keys and the number of times they repar at values

    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
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