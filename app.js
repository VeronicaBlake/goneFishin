
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
    'net': {
        price: 4,
        quantity: 0,
        fishAdded: 10
    },
    'bait': {
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
    //  for( let key in autoUpgrades){
    //     totalFish += autoUpgrades[key].fishAdded * autoUpgrades[key].quantity
    // }
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

function buyAutoUpgrade(key){
    let price = autoUpgrades[key].price
    if(totalFish >= price){
        totalFish -= price
        autoUpgrades[key].quantity++ 
        modifier = ((price.fishAdded)*(autoUpgrades.quantity))
    }
    document.getElementById(`${key}-total`).innerHTML = `x` + autoUpgrades[key].quantity.toString()
    draw()
}
// add to totalfish on the interval