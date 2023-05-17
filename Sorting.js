//As a conclusion: if we want to sort numbers in numerical order,
//we must include in the sort method one parameter: a compare function. 
//The compare function, when we want it in ascending order, is as simple as 
//switching places when the first number is higher than the second one.

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function (a, b) {
    return a - b;
});

// ES6
numbers.sort((a, b) => a - b);

console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]


const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbers.sort(function (a, b) {
    return b - a;
});

// ES6
numbers.sort((a, b) => b - a);

console.log(numbers);
// [ 223, 112, 99, 68, 64, 23, 22, 18, 9, 1, 0 ]
