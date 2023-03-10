//given a specific end point fetch datra from an API
//Write a function that returns the details of all rocket flights  / missions

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
//This is because the console.log is executed befire the function has had time to fetch the data from the API

// const timeoutIdThree = setTimeout(() => {
//     console.log('TEST')

// }, 5000);

const checkAfterTime = setTimeout(() => {
    console.log(answer)
}, 5000);