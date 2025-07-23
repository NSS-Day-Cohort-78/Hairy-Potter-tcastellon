// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 3)
let platter = makePottery("platter", 6, 1)
let vase = makePottery("vase", 8, 7)
let ashtray = makePottery("ashtray", 4, 2)
let bowl = makePottery("bowl", 4, 4)

// Fire each piece of pottery in the kiln
let mugs = firePottery(mug, 1800)
let platters = firePottery(platter, 2000)
let vases = firePottery(vase, 2250)
let ashtrays = firePottery(ashtray, 1975)
let bowls = firePottery(bowl, 2135)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mugs)
toSellOrNotToSell(platters)
toSellOrNotToSell(vases)
toSellOrNotToSell(ashtrays)
toSellOrNotToSell(bowls)

let potteryToSell = usePottery()


// console.log(potteryToSell)
// console.log(mugs)
// console.log(platters)
// console.log(vases)
// console.log(ashtrays)
// console.log(bowls)

// Invoke the component function that renders the HTML list

