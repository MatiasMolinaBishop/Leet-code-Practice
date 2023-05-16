//Create a function that takes 2 arguments; (1) an arr of numbers (2) a number
//We want to know if (and the index / numbers) on the arr that add up to the second argument number

//We knwo we will have to iterate trough the arr to check the values
//Because we would need to check / add each index number with the rest of the arr until we get our desire result
//We will need to iterate the arr again keeping track of that corresponding index 
//Bically a loop inside a loop

const twoSum = (arr, num) => {

    let possbleCombos = []

    for (let i = 0; i < arr.length; i++) {
        //Like we said we ill have to check each value with all the rest of values so we iterate again all for each one
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                possbleCombos.push(`${arr[i]} + ${arr[j]} add up to ${num}`)
                //return (`${arr[i]} + ${arr[j]} add up to ${num}`)
            }
        }
    }

    if (possbleCombos.length === 0) {
        return (`No numbers at up to ${num}`)
    }


    return possbleCombos
}
console.log(twoSum([1, 2, 2, 3], 4))

//THERE IS ANOTHER WAY OF SOLVING THIS ALGORITHM MORE EFFICIENTLY
//VANDALOOP SOUTH PARK