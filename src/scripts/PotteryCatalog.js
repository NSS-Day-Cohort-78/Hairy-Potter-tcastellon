//Variable with an empty array. Array will store pottery that will be sold.
const potteryCatalog = []

//Define and export a function named toSellOrNotToSell, must accept a pottery object as input
export const toSellOrNotToSell = (maybeForSalePottery) => {
    //If pottery is cracked, do not add a price property
    //If pottery is not cracked, add object to array of items to be sold
    //If weight of pottery is greater than or equal to 6 then function must add a price property with a value 40
    //If weight of pottery is less than 6 then function must add a price property with a value 20
    if(maybeForSalePottery.cracked === true) {
        maybeForSalePottery
    } else if(maybeForSalePottery.weight >= 6) {
        maybeForSalePottery.price = 40
    } else if(maybeForSalePottery.weight < 6) {
        maybeForSalePottery.price = 20
    }
    //Return the array of items to be sold
    potteryCatalog.push(maybeForSalePottery)
}

//Define and export a function named usePottery that returns a copy of the array of itmes to be sold
export const usePottery = () => {
    let potteryToBeSold = structuredClone(potteryCatalog)
    return potteryToBeSold
}