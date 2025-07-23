//Define and export a function named firePottery that accepts these values as input: an object representing a piece of pottery that was made at the wheel in the makePottery function and number specifying the firing temperature of the kiln.
export const firePottery = (madePottery, temp) => {
    
    //The function must add a new property of fired with the value of true to the object
    madePottery.fired = true
    
    //The function must add a new property of cracked to the object: if the temperature of the kiln is above 2200 degrees then cracked property must have a value of true, if the temperature of the kiln is at or below 2200 degrees then cracked property must have a value of false.
    if(temp > 2200) {
        madePottery.cracked = true
    } else if(temp <= 2200) {
        madePottery.cracked = false
    }

    //return both new properties after they have been added
    return madePottery
}




