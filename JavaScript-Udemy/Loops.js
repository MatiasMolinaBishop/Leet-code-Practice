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