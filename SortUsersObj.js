//Get back user with finalExam grade over 70% (C and above)
//sort those users by top of class (Highest grades) top 3 students and their names

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

const topStudents = () => {
    //This gives me an arr of the students who passed the class. Not really necessary but asked for 
    const notFail = students.filter((student) => {
        if (student.finalExam >= 70) {
            return student
        }
    })

    //.sort() is a javascript built in method for arrays. 
    //In this case if a < b we return -1 otherwise return 1 (ascending oerder) meaning from low to top
    // a < b we return 1 if not -1 (descending) meaning from top to bottom

    notFail.sort((student1, student2) => (student1.finalExam < student2.finalExam ? 1 : -1))

    return notFail
}

//console.log(topStudents(students))


//FILTER BY A SPCIFIC NAME

const filterName = (userName, arr) => {
    const searchedUser = arr.filter((element) => {
        return element.name === userName
    })

    return searchedUser
}

console.log(filterName('Carolina Perez', students))