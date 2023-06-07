//given a specific end point fetch datra from an API
//Write a function that returns the details of all rocket flights  / missions
//When working wth react we can use axios and there would be no need to .json() the data coming from the API

let API = 'https://api.spacexdata.com/v4/launches'

let answer = []

const fetchData = async () => {

    try {
        const rawData = await fetch(API)
        answer = await rawData.json()
        //console.log(answer[0].details)

    } catch (err) {
        console.log(err)
    }

}

fetchData()
//console.log(answer)
//console.log(fetchData())
//When we console log answer outside of the async await function it returns an empty arr
//This is because the console.log is executed before the function has had time to fetch the data from the API

// const timeoutIdThree = setTimeout(() => {
//     console.log('TEST')

// }, 5000);

const checkAfterTime = setTimeout(() => {
    console.log(answer)
}, 5000);

//Keep inmind we whenever we fetch data we must be aware of working with promises. 
//We must run the code asyncronously as it takes time to send a request and get a response OK