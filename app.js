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

//this function adds to the total fish, and for either of the click upgrades will 
//add the additional fish multiplied by the quantity. Updates total fish count by calling draw.
function addFish(){
    totalFish++
    for( let key in clickUpgrades){
        totalFish += clickUpgrades[key].fishAdded * clickUpgrades[key].quantity
    }
    draw()
}
// REVIEW there's got to be a way to put these into two functions but I'm sort of freaking rn
//so I'll take what I can get 

function addFishAuto(){
    totalFish++
    for(let key in autoUpgrades){
        totalFish += autoUpgrades[key].fishAdded * autoUpgrades[key].quantity
    }
    console.log(totalFish)
}

function draw(){
    document.getElementById('total-fish').innerHTML = `Total Fish:` + totalFish.toString() 
}


//REVIEW What is "modiefier" doing??
function buyClickUpgrade(key){
    let upgrade = clickUpgrades[key].price
    if(totalFish >= upgrade){
        totalFish -= upgrade
        clickUpgrades[key].quantity++ 
        modifier = ((upgrade.fishAdded)*(clickUpgrades.quantity))
    }
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