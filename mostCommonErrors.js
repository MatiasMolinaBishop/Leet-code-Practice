//npx live-server

// Error Types
// When a runtime error occurs JavaScript compiler throws and Error object. The Error object is a special object that contains the stack trace and information about the error.

// The most common Error types in JavaScript are listed below:


// ReferenceError: Raised when an invalid reference is used.
const name = 'Ted';
console.log(nme);
// Uncaught ReferenceError: nme is not defined

//SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.
function doSomething() {
  console.log("I'm doing something!)
}
// Uncaught SyntaxError: Unexpected end of input

//TypeError: Raised when the type of a variable is not as expected.

const name = 'Bob';
// (toFixed is a method for numbers)
name.toFixed();
// Uncaught TypeError: name.toFixed is not a function

console.log('test')
