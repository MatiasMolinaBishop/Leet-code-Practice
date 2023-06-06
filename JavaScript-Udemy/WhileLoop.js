//WHILE LOOP

//We can only specify one condition. The loop will run forever until the condition is no longer true
//The while loop loops through a block of code as long as a specified condition is true.
//while (condition) {
// code block to be executed
//}

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
//   }

// let counter = 0

// while (counter < 10) {
//     console.log(`This is count number ${counter}`)
//     counter++

// }


let dice = Math.floor(Math.random() * 7)
// console.log(dice)

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.floor(Math.random() * 7)
    if (dice === 6) {
        console.log('YOU ROLLED A 6 YOU A WINNER BOY')
    }
}

//WE DO NOT KNOW BEFORE HAND HOW MANY ITERATIONS WE WILL NEED. THIS IS WHEN WE WOULD USE A WHILE LOOP

//While basically there is a coditin we specify and the block of code that follows will excute in a loop until that condition is no longer true