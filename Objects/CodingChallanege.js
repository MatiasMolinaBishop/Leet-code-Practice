const Tomas = {
    firstName: 'Tomas',
    height: 1.69,
    weight: 78,

    BMI: function () {
        this.BMI = (this.height / this.weight) ** 2

        return this.BMI
    }
}

const Matias = {
    firstName: 'Matias',
    height: 1.95,
    weight: 92,

    BMI: function () {
        this.BMI = (this.height / this.weight) ** 2

        return this.BMI
    }
}

console.log(Matias.BMI())
console.log(Tomas.BMI())
console.log(Matias.BMI > Tomas.BMI ? 'Matias has a greater BMI' : 'Tomas has a greater BMI')

//CREATE OBJECTS TO SEE BREATHES LIONGER UNDER WATTER


const Laura = {
    record: 2.5,
    average: 2.25,
    DIVE: function () {
        this.DIVE = (this.record + this.average) / Math.floor(Math.random() * 5)
        return this.DIVE
    }
}

const Monica = {
    record: 3.1,
    average: 2.8,
    DIVE: function () {
        this.DIVE = (this.record + this.average) / Math.floor(Math.random() * 5)
        return this.DIVE
    }


}

console.log(Laura.DIVE())
console.log(Monica.DIVE())
console.log(Math.floor(Math.random() * 5))

console.log(`THE WINNER IS ${Laura.DIVE > Monica.DIVE ? 'MONICAAA!!!' : 'LAURAAAAA!!!'}`)