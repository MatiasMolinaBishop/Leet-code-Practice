//Looping backwards

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven']
]

for (let i = jonasArray.length; i >= 0; i--) {
    console.log(jonasArray[i])
}

//LOOPS INSIDE OF A LOOP
//We nat to have 5 repetitions for each excercise

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`------ Starting excercise ${excercise}`)
    for (let repetition = 1; repetition < 6; repetition++)
        console.log(`-------------excercise ${excercise} rep: ${repetition}`)
}

//absssss

for (let abbSet = 1; abbSet < 6; abbSet++) {
    console.log(`Set ${abbSet}`)

    for (let rep = 1; rep < 21; rep++) {
        console.log(`rep ${rep}`)
    }

}
