//For understanding Ironhack lecture

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let position = 0
let dice = Math.floor(Math.random() * 6) + 1

position = (position + dice) % squares.length;

console.log('TURN 1')
console.log(dice)
console.log(position)

dice = Math.floor(Math.random() * 6) + 1
position = (position + dice) % squares.length;

console.log('TURN 2')
console.log(dice)
console.log(position)

dice = Math.floor(Math.random() * 6) + 1
position = (position + dice) % squares.length;

console.log('TURN 3')
console.log(dice)
console.log(position)


console.log('TURN 4')
console.log(dice)
console.log(position)

dice = Math.floor(Math.random() * 6) + 1
position = (position + dice) % squares.length;

console.log('TURN 5')
console.log(dice)
console.log(position)

dice = Math.floor(Math.random() * 6) + 1
position = (position + dice) % squares.length;

console.log('TURN 6')
console.log(dice)
console.log(position)

//Inheritance is a feature of object-oriented programming that allows code reusability 
//when a class includes property (attribute or method) of another class.

//abstraction - means showing just what’s necessary to the outside world and hiding 
//all that is unnecessary-to-be-known. Imagine a car engine - you know it works right, 
//because your car is moving, but how it works, you really don’t have to know.

//polymorphism - means inheriting the method from the parent class but changing its functionality.
//ex. If you have a class Person and this class has a method move(). 
//If you extend class Child with class Person most likely the child will crawl when you invoke move() method. 
//However, if you extend class Grownup with class Person, they will walk when move() is called. (overly simplified example but just to help you understand.)

//encapsulation means grouping the data and the methods that manipulate this data together. 
//The goal is to keep them safe from interference and misuse. 
//We have to aim to hide internal implementation and to organize our code as if it is a black box: 
//it should do the job but the rest of the application should not know how they do it. (this is very much connected with abstraction.)