//Define and export potteryList function
//The potteryList function must get the items to be sold from the PotteryCatalog module
export const potteryList = (potteryToSell) => {
    let potteryToSellHTML = ''

    //The pottryList function must convert each object in the array to an HTML string
    for (const pottery of potteryToSell) {
        potteryToSellHTML +=`
        <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${potteryToSell.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${potteryToSell.weight} grams and is ${potteryToSell.height} cm in height
            </div>
            <div class="pottery__price">Price is ${potteryToSell.price}</div>
        </section>
        `
    }
    
}

//potteryList function must return a single string that contains all of the pottery HTML representation