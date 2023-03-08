//we want to sort numbers in numerical order, we must include in the sort method one parameter: a compare function. 
//The compare function, when we want it in ascending order, is as simple as switching places when the first number is higher than the second one.

//const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
//numbers.sort(function (a, b) {
//return a - b;
//});

// ES6
//numbers.sort((a, b) => a - b);

//console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]


//NOTE - arrys will only contain numbers
const mergeSort = (arr1, arr2) => {

    let answer = [...arr2, ...arr1].sort((a, b) => b - a)
    return console.log(answer)

}

mergeSort([], [654, 20, -1])





