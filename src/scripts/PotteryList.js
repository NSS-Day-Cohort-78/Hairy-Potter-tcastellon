//Define and export potteryList function
//The potteryList function must get the items to be sold from the PotteryCatalog module
export const potteryList = (potteryToSell) => {
    let potteryToSellHTML = ''

    //The pottryList function must convert each object in the array to an HTML string
    for (const pottery of potteryToSell) {
        potteryToSellHTML +=`
        <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is ${pottery.price}</div>
        </section>
        `
    }
    return potteryToSellHTML
}

//potteryList function must return a single string that contains all of the pottery HTML representation