// setTimeout(() => {
//     console.log('hi')
// }, 1000)

// setTimeout(() => {
//     console.log('Matias')
// }, 5000)

// setInterval(() => {

//     for (let i = 0; i < 11; i++) {
//         console.log(i)
//     }


// }, 1000)

let count = 0

const timer = setInterval(() => {
    console.log(count)
    count++

    if (count === 10) {
        console.log('Pop!')
        clearInterval(timer)
    }

}, 1000)