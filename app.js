
let clickUpgrades = {
    'beverage': {
        price: 2,
        quantity: 0,
        fishAdded: 1, 
        //this is how many are added to the total when the upgrade is run
    },
    'betterRod': {
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

var totalFish = 0;
function addFish(){
    totalFish++
    for( let key in clickUpgrades){
        totalFish += clickUpgrades[key].fishAdded * clickUpgrades[key].quantity
    }
    console.log(totalFish)
    draw()
}

function draw(){
    document.getElementById('total-fish').innerHTML = `Total Fish:` + totalFish.toString() 
}

function buyClickUpgrade(key){
    let upgrade = clickUpgrades[key].price
    if(totalFish >= upgrade){
        totalFish -= upgrade
        clickUpgrades[key].quantity++ 
        modifier = ((upgrade.fishAdded)*(clickUpgrades.quantity))
    }
    //INTERPOLATING IS THE BEEEEEST
    document.getElementById(`${key}-total`).innerHTML = `x` + clickUpgrades[key].quantity.toString()
    draw()
}

///

function buyAutoUpgrade(){
    let upgrade = autoUpgrades[key].price
    if(totalFish >= upgrade){
        totalFish -= upgrade
        autoUpgrades[key].quantity++ 
        modifier = ((upgrade.fishAdded)*(autoUpgrades.quantity))
    }
    //INTERPOLATING IS THE BEEEEEST
    document.getElementById(`${key}-total`).innerHTML = `x` + autoUpgrades[key].quantity.toString()
    draw()
    //take into account how many fish are needed to buy 
    //evaluate if totalFish is greater than or equal to 
    //subtract the cost of the upgrade from totalfish
    //fish will be added on the interval 
}

// takes the priceMultiplier and multiplies the cost of the upgrade by that
function increaseUpgradeCost(upgradeCost){
   
}

