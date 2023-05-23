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