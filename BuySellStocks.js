//Given an array of numbers the numbers represent the stock and the index the date
//[35, 4, 45, 67, 67 .. ] This would mean on day 0 thr price was 35 on day 1 the price was 4 etc.. 

const BuySellStocks = (arr) => {
    //We find when and what is the lowest price on the arr so the lowest and at which index
    //Then we will compare that smallest price to all the next prices folowing on the array.
    //If the array location of that smallest is at the end then thta will mean there is no profit
    let lowestPrice = Math.min(...arr)
    let dateToBuy = arr.indexOf(lowestPrice)
    let priceToSell = 0

    // console.log(arr[dateToBuy + 1])
    console.log(dateToBuy)

    for (let i = dateToBuy; i < arr.length; i++) {
        //console.log(arr[i])
        if (arr[dateToBuy + 1] === undefined) {
            return 'no profit'
        } else if (arr[i + 1] > priceToSell) {
            priceToSell = arr[i + 1]
        }
    }

    let profit = priceToSell - lowestPrice
    let dayToSell = arr.indexOf(priceToSell)

    return `if you buy on the ${dateToBuy}th day and sell on the ${dayToSell}th you your profit will be ${profit} per stock`
    //console.log(highestPrice)
}

console.log(BuySellStocks([7, 1, 5, 3, 6, 4]))

//SOLUTION ABOVE DOES NOT WORK FOR EVRY CASE. SEE BELOW FOR FULL SOLUTION

const maxProfit = (arr) => {
    //Original price
    let buyPrice = arr[0]
    //Keep track of Profit
    let profit = 0

    //Because we are checking by pairs we dont want to reach the end of the itreation and have no pair. So we say arr.length -1 as the for loop parameter
    //Go through arr and see if there is profit
    for (let i = 0; i < arr.length - 1; i++) {
        let tempProfit = arr[i + 1] - arr[i]
        //if there is no profit continue
        if (tempProfit > 0) {
            //if there is profit 
            //Check if current purchase price is < than old one
            //replace starting price
            if (arr[i] < buyPrice) {
                buyPrice = arr[i]
            }
            //track profit
            //new profit > profit track it
            if (arr[i + 1] - buyPrice > profit) {
                profit = arr[i + 1] - buyPrice
            }
        }
    }
    return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))