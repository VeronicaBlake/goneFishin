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
    'bait': {
        price: 4,
        quantity: 0,
        fishAdded: 30
    },
    'net': {
        price: 5,
        quantity: 0,
        fishAdded: 10
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

function draw(){
    document.getElementById('total-fish').innerHTML = `Total Fish:` + totalFish.toString() 
}

function buyClickUpgrade(key){
    let upgrade = clickUpgrades[key].price
    //assign the variable 'upgrade' to the price of the specific upgrade chosen on the click
    if(totalFish >= upgrade){
        //if the total fish are greater than/equal to the price of the upgrade
        totalFish -= upgrade
        //subtract the cost of the upgrade 'buy'
        clickUpgrades[key].quantity++ 
        //add one to how many upgrades the player has 
        clickUpgrades[key].price = clickUpgrades[key].price*2
        //multiply the price of the upgrade by 2 each time one is bought 
    }
    document.getElementById(`${key}-total`).innerHTML = `x` + clickUpgrades[key].quantity.toString()
    document.getElementById(`${key}-price`).innerHTML = `fish needed:` + clickUpgrades[key].price.toString()
    //update the quantity and price on the user's display 
    draw()
    //update total fish on user's display 
}

//REVIEW do these have to be two separate functions because 2 dictionaries? 

function buyAutoUpgrade(key){
    let price = autoUpgrades[key].price
    if(totalFish >= price){
        totalFish -= price
        autoUpgrades[key].quantity++ 
        autoUpgrades[key].price = autoUpgrades[key].price*2
    }
    document.getElementById(`${key}-total`).innerHTML = `x` + autoUpgrades[key].quantity.toString()
    document.getElementById(`${key}-price`).innerHTML = `fish needed:` + autoUpgrades[key].price.toString()
    draw()
}

// setInterval((key) => {
//     totalFish = totalFish + autoUpgrades[key].fishAdded
// }, 5000);

// function startIntervalBaker() {
//     collectionInterval = setInterval(collectAutoUpgradesBaker, 5000);
// }tg6

// function collectAutoUpgradesBaker(){
//     feed = bakerMod + feed 
//     update()
// }