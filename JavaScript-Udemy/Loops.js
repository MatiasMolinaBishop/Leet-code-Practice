//for loop - keeps running while condition is true
//Loops allow us to iterate throgh data.

let nums = [1, 2, 3, 4, 5]

for (let i = 0; i <= nums.length; i++) {
    console.log(nums[i])
}

console.log(nums.length)

//1
//2
//3
//4
//5
//undefined -WHY? Well nums.length = 5. Remember arrays start at index 0. Therefore nums[5] does not exists and therefore it is undefined

let song = 'Happy birthday to you'

for (let i = 1; i <= 5; i++) {
    console.log(`${song} ${i}`)
}

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "teacher",
//     friends: ['Michael', 'Peter', 'Steven']
// }

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven']
]

//console.log(jonas)

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]))
}

let newArr = []

for (let i = 0; i < jonasArray.length; i++) {
    newArr.push(typeof jonasArray[i])
}

console.log(newArr)

const years = [1991, 2007, 1969, 2020]

let ages = []
let today = 2037

for (let i = 0; i < years.length; i++) {
    ages.push(today - years[i])
}

console.log(ages)

//CONTINUE - to exit the current itertion of the loop and move to the next one
//BREAK - Terminate the whole loop

//Imagine we just want to push strings to the arr

let newArr2 = []

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] != 'string') {
        continue
    }
    newArr2.push(typeof jonasArray[i])
}

console.log(newArr2)

//BREAK IF CERTAIM NUMBER IS FOUND
//NOTE - The condition that makes the code break is not added to the new arr. Because, the the for loop is terminated before we can even push

let newArr3 = []

for (let i = 0; i < jonasArray.length; i++) {
    if (jonasArray[i] === 46) {
        break
    }
    newArr3.push(jonasArray[i])
}

console.log(newArr3)


//PRACTICE



let testArr = [100, 200, 300, 400, 500]

const arrPractice = (arr) => {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 200) {
            console.log(arr[i])
            break
        }
        console.log(arr[i])

    }

}

console.log(arrPractice(testArr))

