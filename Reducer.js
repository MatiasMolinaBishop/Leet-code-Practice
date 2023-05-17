//Let’s see how we can add the sum we get as a reduced value from some array to already existing value. 
//Assume you’re given the following array and you have to reduce it and add that number to 23 (numberYouGet + 23).

const numbers = [12, 9, 1, 8];

const reduced = numbers.reduce((acc, currentValue) => {
    return acc + currentValue


}, 23)
//Initially set the acc to be 23

console.log(reduced)

const reducedTwo = numbers.reduce((acc, currentValue) => {
    return acc + currentValue
})

console.log(reducedTwo)

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
];

const ages = people.reduce(function (sum, person) {
    return sum + person.age;
}, 0); // initialValue to 0

console.log(ages); // <== 142


const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
];

const avgCalories = menu.reduce((acc, currentValue) => {
    return (acc + currentValue.calories)

}, 0)

console.log(avgCalories)
console.log(Object.keys(menu).length)
console.log(Object.keys(menu))
console.log(avgCalories / menu.length)

//We are developing our super e-commerce website; each product has some user comments and rating stored in an array called “Reviews”. Each review is an object, so we have the following structure:

const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
        { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
        { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
        { user: 'David Recoba', comments: 'Awesome', rate: 5 },
        { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
        { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
};

let rating = product.reviews.reduce((acc, currentValue) => {

    return acc + currentValue.rate
}, 0)

console.log(rating / product.reviews.length)