//Destructuring arrays allows us to specify a variable and assign a value from an array. Order is important
//  Does not mutate the original array

let cars = ['toyota', 'BMW', 'Mercedes']

let [car1, car2, car3] = cars

console.log(car1, car2, car3) // toyota BMW Mercedes
console.log(car1) //toyota

let person = {
    nameUser: 'Matias',
    age: 30,
    sex: 'Male'
}

//Because objects are unorderes you cannot arbitreraly assign a name. You must use the key value pairs from the object you are destructuring
//Note that we can detructure the entire object or just as many key value pairs as we'd like
const { nameUser, age } = person

console.log(age) // 30