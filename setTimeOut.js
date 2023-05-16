// ES5
// function someCallbackFunction() {
//     console.log('Hey there, Ironhackers!');
// }
// data[0].details

// const someCallbackFunctionTwo = () => {
//     console.log('THIS TOOK 3 SECONDS')
// }

// const timeoutIdTwo = setTimeout(someCallbackFunctionTwo, 3000)


// const timeoutIdThree = setTimeout(() => {
//     console.log('TEST')

// }, 5000);


// let i = 1;
// const intervalId = setInterval(function () {
//     console.log(i);

//     i++;

//     if (i > 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);

//Let’s do a reverse countdown from 10 to 0. When the countdown is zero, it should show “Pop!” and stop the interval.

let count = 10

const timer = setInterval(() => {
    console.log(count)
    count--

    if (count === 0) {
        console.log('Pop!')
        //we must call the clear interval() to stop the setInterval function
        clearInterval(timer)
    }
    //1000 milisecinds which = 1 second
}, 1000)

// While setTimeout() executes the function just once,
// setInterval() executes the given function repeatedly until the clearInterval() function is called.

//There is a difference between setInterval() & setTimuout()

let timeoutTest = setTimeout(() => {
    console.log('HALLO')
}, 3000)


