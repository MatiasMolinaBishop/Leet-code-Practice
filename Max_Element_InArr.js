//WHICH STR ON THE ARR OF STRINGS APPEARS THE MOST AND HOW MANY TIMES

const strings = ["hi", "hi", "bye", "test", "NeverBackDwon"]
//create an empty object where we will store the strings as keys and give them the nymber of times they appear on the array as values
let commonStrings = {}

//console.log(commonStrings[1])
//the above output returns undefined. That is because initially the object is empty

//forEach is a built in array method tha iterates through the array. Similar to map it takes as argument a function which is called upon each element of the array. 
strings.forEach(function (string) {
    //if the objet in this case comminStrings[string] wich will be the elemnt at every iindex of the array we are calling forEach upon
    if (commonStrings[string] === undefined) {
        //Initially it will always be undefined because the object we created is empty then we add to that object a key pair value
        //the key will be the [string] and the value we here specify as 1
        commonStrings[string] = 1;
    } else {
        //If the object[arrayElement] is not undefined it means there is already a value key pair with the same key on the object. 
        //This would mean that these has already been created with the previous if and given a value of a number. So we ++ adding 1 to that previous count
        commonStrings[string]++;
    }
});

console.log(commonStrings)
//As result the originally empty object after the forEach on the array will now be an oject containing key value pairs witg the arr elements as keys 
//and the number of times they appear on the array as values

//FOR UNDERSTANDING obj['somethingHere'] if it exists it retunrs its value
let obj = {
    "blue": 'TEST',
    "green": 2,
    "yellow": 0
}
//specifying the key inside [] of an object will return its value if it exits. Otherwise it will return undefined
console.log(obj['blue'])
console.log(obj['red'])
console.log(obj['yellow'])

//Now that we the object with the info we want we need to get this info somehow. We could proably filter will try this later
//We intiate 2 variables one which will eventually hold the name of strung that repats the most and another one which will hold the highest number of times a string is present on the array
let maxEntry = ''
let maxValue = 0

//commonStrings={hi:2, bye:3...}
//for in - is a method for objects. The property (name it whatever) hold the key for each of the elements as we iterate through them
//commonStrngs is the object which we iterate through


for (property in commonStrings) {
    //commonStrings[property] is the same as saying commonStrings["hi"] and so on which returns its value in this case nuumbers
    //so its the same as saying 1 > 0 - intially 0
    if (commonStrings[property] > maxValue) {
        //If the value of a given key on the object is > the maxValue then we change that max value to whatver the value of that element is
        //and we make maxEntry = to the key which corresponds to that highest value
        maxValue = commonStrings[property];
        maxEntry = property;
    }
}

console.log(`The string that repeats the most is ${maxEntry} and it exists ${maxValue} times`)


//const object = { a: 1, b: 2, c: 3 };
//for (const property in object) {
//console.log(`${property}: ${object[property]}`);
//}

// Expected output:s
// "a: 1"
// "b: 2"
// "c: 3"

//The for in method is used to iterate through objects. As seen above we can then conditnolly arrange this data to get whatver results we want


let list = ['python', 'NodeJS', 'javaScript', 'javaScript', 'MongoDB', 'Express', 'javaScript']

let countMost = (List) => {

    //I want to count how many times wach index value is repeated. If any.. and then return the value that repeats itself the most

    let objeto = {}

    for (let i = 0; i < list.length; i++) {

        if (objeto[list[i]] === undefined) {
            objeto[list[i]] = 1
        } else {
            objeto[list[i]]++
        }
    }

    console.log(Object.keys(objeto))
    console.log(Object.values(objeto))

    let keyMax = ''
    let max = 0

    for (key in objeto) {
        if (objeto[key] > max) {
            max = objeto[key]
            keyMax = key
        }
    }


    return `The language ${keyMax} appears the max with a tota of ${max} times mentioned`

}

console.log(countMost(list))


