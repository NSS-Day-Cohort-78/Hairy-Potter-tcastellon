// A variable with an initial value of 1
let potteryCounter = 1

// Define and export a function named makePottery that accepts values as input (i.e. parameters) in this order: shape, weight, and height.
export const makePottery = (shape, weight, height) => {
    let pottery = {
        id: potteryCounter++,
        shape: shape,
        weight: weight,
        height: height
    }
    // The makePottery function must return an object with these properties: shape, weight, height, and id.
    return pottery
}


