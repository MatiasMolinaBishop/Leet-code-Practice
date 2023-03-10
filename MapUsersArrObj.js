//Get an array with the names of all sutudents and change capital letters to lowercase and viseversa

const students = [
    {
        name: 'Tony Parker',
        firstProject: 80,
        secondProject: 75,
        finalExam: 90
    },
    {
        name: 'Marc Barchini',
        firstProject: 84,
        secondProject: 65,
        finalExam: 65
    },
    {
        name: 'Claudia Lopez',
        firstProject: 45,
        secondProject: 95,
        finalExam: 99
    },
    {
        name: 'Alvaro Briattore',
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
    },
    {
        name: 'Isabel Ortega',
        firstProject: 90,
        secondProject: 32,
        finalExam: 85
    },
    {
        name: 'Francisco Martinez',
        firstProject: 90,
        secondProject: 55,
        finalExam: 78
    },
    {
        name: 'Jorge Carrillo',
        firstProject: 83,
        secondProject: 77,
        finalExam: 90
    },
    {
        name: 'Miguel López',
        firstProject: 80,
        secondProject: 75,
        finalExam: 75
    },
    {
        name: 'Carolina Perez',
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
    },
    {
        name: 'Ruben Pardo',
        firstProject: 89,
        secondProject: 72,
        finalExam: 65
    }
];

const getNames = (arr) => {

    //First we want to have an array with the names so that we can manipulate them. 
    //We map over the arr and for every element in this case an object we return that name by accessin the object.

    const arrNames = arr.map((student) => {
        //let mutatedName = student.name.replace(student.name[0], student.name[0].toLowerCase())
        //console.log(restOfName)
        //return mutatedName
        return student.name
    })

    //Now that we have an arr with the names we want to iterate through those names but we always have to iterate over each letter
    //to check if they are upperCaes or lowerCase. Loop inside Loop.
    //We create a new arr to push the names after they have been modified. 

    let newArr = []

    for (let i = 0; i < arrNames.length; i++) {
        //We need an empty arr to push each letter of the name ater it has been checked with the specified conditions
        let studentModified = []

        for (let j = 0; j < arrNames[i].length; j++) {

            if (arrNames[i][j] === arrNames[i][j].toLowerCase()) {
                studentModified.push(arrNames[i][j].toUpperCase())

            } else if (arrNames[i][j] === arrNames[i][j].toUpperCase()) {
                studentModified.push(arrNames[i][j].toLowerCase())
            }
        }
        //When we push the individua arr conatining each word after the loop and join it '' so that it enters the new arr as a string
        newArr.push(studentModified.join(''))
    }

    return newArr
}

console.log(getNames(students))