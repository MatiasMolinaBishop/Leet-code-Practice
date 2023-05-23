console.log('TESTING')

const measureKelvin = () => {
    const meassurement = {
        type: 'temp',
        unit: 'celsius',
        //note prompt will always return a string
        //  value: Number(prompt('Degrees celsius:')) this would solve this issue
        value: prompt('Degrees celsius:')
    }
    console.log(meassurement)

    const kelvin = meassurement.value + 273

    return kelvin
}

console.log(measureKelvin())