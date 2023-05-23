const jonas = {
    firstName: "Jonas",
    lastName: "Molina",
    birthYear: 1992,
    job: "Fullstack Developer",
    friends: ['Tomas', 'Laura', 'Monica'],
    hasDriversLicense: false,
    //Calculate age function within the object
    calcAge: function () {
        console.log(this)

        return new Date().getFullYear() - this.birthYear
    },

    // calcAge: function () {
    //     console.log(this)
    //this.age = new Date().getFullYear() - this.birthYear
    //We can also use the "this" to create a new property on an object
    //This way we could access the age withou invoking the function but rather just useing jonas.age



    //     return new Date().getFullYear() - this.birthYear
    // }

    //CHALLANGE
    summary: function () {

        let driver

        if (this.hasDriversLicense) {
            driver = 'does'
        } else {
            driver = 'does NOT'
        }

        return `${this.firstName} is a ${this.calcAge()} and ${driver} have a permit to drive`
    },

    //USING THE TERNARY OPERATOR ?
    summaryTwo: function () {
        return `I repeat ${jonas.hasDriversLicense ? 'does' : 'doesNOT'}`
    }
}

console.log(jonas.calcAge())
console.log(jonas.summary())
console.log(jonas.summaryTwo())

//When we is the "this" keyword in objects we are refring to that object. 
//Therefore we can access its key / values as we do on the calcAge function