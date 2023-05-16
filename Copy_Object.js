//The JSON.stringify() method converts a JavaScript object or value to a JSON string.
//The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

const book1 = {
    author: 'Charlotte Bronte',
    publishers: [
        { companyName: 'AB' },
        { companyName: 'CD' }
    ]
}

const book5 = JSON.parse(JSON.stringify(book1)); // => create the copy: book5

book1.publishers[0] = {
    companyName: 'Super Cool Company', // => change the deep property of the book1
};
book1.author = 'William Shakespeare'; // change the property of the book1
//console.log(book1);
//console.log(book5);

const obj1 = {
    book: 'Harry Potter',
    pages: 560
}

let obj2 = { ...obj1 }
let obj3 = obj1

// console.log(obj1 === obj2)
// console.log(obj1 === obj3)

//WE CAN ALSO USE THIS METHOD TO DEEP CLONE ARRAYS
// multidimensional array
// const students = [
//     ['Ana', 'John', 'Fabio'],
//     ['Alex', 'Mike', 'Vero'],
//   ];

// case 1: using spread operator
//const ironhackers = [...students];
//students[0].push('Sandra');

//console.log(students); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// [ 'Alex', 'Mike', 'Vero' ] ]
//console.log(ironhackers); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// [ 'Alex', 'Mike', 'Vero' ] ]

// case 2: using JSON.parse(JSON.stringify())
//const ironhackers = JSON.parse(JSON.stringify(students));
//students[0].push('Sandra');

//console.log(students); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// [ 'Alex', 'Mike', 'Vero' ] ]
//console.log(ironhackers); // [ [ 'Ana', 'John', 'Fabio' ], [ 'Alex', 'Mike', 'Vero' ] ]



//Basicallt when we use the spread operator to copy and arr or obect altough we are not mutating the org arr if the mpodified the org then the copy qould also me modified?

let test1 = [1, 2]
let test2 = [...test1]

test1.push('test')
test2.pop()

console.log(test1)
console.log(test2)

//NO NOR REALLY SPREAD OPERATOR WORKS PERFECTLY