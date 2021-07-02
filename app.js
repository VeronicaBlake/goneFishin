var totalFish = 0;
let clickUpgrades = {
    beverage: {
        price: 2,
        quantity: 0,
        fishAdded: 1, 
        //this is how many are added to the total when the upgrade is run
    },
    betterRod: {
        price: 3,
        quantity: 0,
        fishAdded: 2,
    }
}

let autoUpgrades = {
    net: {
        price: 4,
        quantity: 0,
        fishAdded: 10
    },
    bait: {
        price: 5,
        quantity: 0,
        fishAdded: 30
    }
}

function click(){
    totalFish ++
    console.log(totalFish)
    document.getElementById('total-fish').innerHTML = `Total Fish:` + totalFish.toString()
    draw()
}

// function draw(key){
//     for( key in upgrades){
//         let upgrade = upgrades[key]
//         //invoke update price and update modifier (they will be taking in upgrade)
//         update(upgrade)
//         update(modifier)
//     }
// }

// //applies the upgrade 
// //2 click upgrades (beverage and reels) - these will increase how effective your clicks are.
// //  bait will add 1 fish per click to the total
// //  reel will add 2 fish per click to your total 
// function buyClickUpgrade(){
//     let upgrade = clickUpgrades[key].price
//     if(totalFish >= upgrade){
//         totalFish -= upgrade
//         upgrades.quantity++ 
//         modifier = ((upgrade.fishAdded)*(upgrades.quantity))
//     }
//     //take into account how many fish are needed to buy 
//     //evaluate if totalFish is greater than or equal to price needed to buy
//     //subtract the cost of the upgrade from totalFish
//     //add the amountOfFishAddedFromUpgrade to the totalFishOnClick 
//     //multiplier will go up
//     //
//     update()
// }

// function buyAutoUpgrade(){
//     //take into account how many fish are needed to buy 
//     //evaluate if totalFish is greater than or equal to 
//     //subtract the cost of the upgrade from totalfish
//     //fish will be added on the interval 
// }

// // takes the priceMultiplier and multiplies the cost of the upgrade by that
// function increaseUpgradeCost(upgradeCost){
   
// }

