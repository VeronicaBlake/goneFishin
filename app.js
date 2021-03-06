let clickUpgrades = {
    'beverage': {
        price: 10,
        quantity: 0,
        fishAdded: 1, 
        //this is how many are added to the total when the upgrade is run
    },
    'betterRod': {
        price: 30,
        quantity: 0,
        fishAdded: 2,
    }
}

let autoUpgrades = {
    'bait': {
        price: 50,
        quantity: 0,
        fishAdded:5
    },
    'net': {
        price: 100,
        quantity: 0,
        fishAdded:10
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
    document.getElementById(`${key}-mod`).innerHTML = `fish added per click:` + clickUpgrades[key].fishAdded.toString()
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
        startInterval(key)
    }
    document.getElementById(`${key}-total`).innerHTML = `x` + autoUpgrades[key].quantity.toString()
    document.getElementById(`${key}-price`).innerHTML = `fish needed:` + autoUpgrades[key].price.toString()
    document.getElementById(`${key}-mod`).innerHTML = `fish added every 3 seconds:` + autoUpgrades[key].fishAdded.toString()
    draw()
}

function startInterval(key){
    setInterval(() => {
        totalFish = totalFish+(autoUpgrades[key].fishAdded*2)
        console.log(autoUpgrades[key].fishAdded*autoUpgrades[key].quantity)
        draw()
    }, 3000);
}