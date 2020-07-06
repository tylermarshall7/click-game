let fossil = 0
let clickTotal = 1
let autoTotal = 0


// clicker upgrades // 

let clickUpgrades = {
  shovel: {
    price: 20,
    quantity: 0,
    multiplier: 1,
  },

  goldShovel: {
    price: 100,
    quantity: 0,
    multiplier: 5,
  }



}


// Automatic Upgrades //
let autoUpgrades = {
  resetti: {
    price: 200,
    quantity: 0,
    multiplier: 10,
  },

  blathers: {
    price: 500,
    quantity: 0,
    multiplier: 30,
  }
}


// functions //


function dig() {
  fossil += (1 * clickTotal)
  update()
}

function update() {
  document.getElementById("fossilTotal").innerText = fossil.toString()

  document.getElementById("shovelPrice").innerText = clickUpgrades['shovel'].price.toString()
  document.getElementById("shovelQuantity").innerText = clickUpgrades[`shovel`].quantity.toString()

  document.getElementById("goldShovelPrice").innerText = clickUpgrades['goldShovel'].price.toString()
  document.getElementById("goldShovelQuantity").innerText = clickUpgrades[`goldShovel`].quantity.toString()

  document.getElementById("resettiPrice").innerText = autoUpgrades['resetti'].price.toString()
  document.getElementById("resettiQuantity").innerText = autoUpgrades[`resetti`].quantity.toString()

  document.getElementById("blathersPrice").innerText = autoUpgrades['blathers'].price.toString()
  document.getElementById("blathersQuantity").innerText = autoUpgrades[`blathers`].quantity.toString()

  if (fossil <= clickUpgrades.shovel.price) {
    document.getElementById("shovelButton").disabled = true
  } else {
    document.getElementById("shovelButton").disabled = false
  }

  if (fossil <= clickUpgrades.goldShovel.price) {
    document.getElementById("goldShovelButton").disabled = true
  } else {
    document.getElementById("goldShovelButton").disabled = false
  }

  if (fossil <= autoUpgrades.resetti.price) {
    document.getElementById("resettiButton").disabled = true
  } else {
    document.getElementById("resettiButton").disabled = false
  }

  if (fossil <= autoUpgrades.blathers.price) {
    document.getElementById("blathersButton").disabled = true
  } else {
    document.getElementById("blathersButton").disabled = false
  }



}

// upgrade purchase //

function buyClick(clickName) {


  clickTotal += clickUpgrades[clickName].multiplier
  clickUpgrades[clickName].quantity++


  document.getElementById("clickMultiplier").innerText = clickTotal.toString()
  fossil -= clickUpgrades[clickName].price
  clickUpgrades[clickName].price *= 2
  update()
}

function buyAuto(autoName) {


  autoTotal += autoUpgrades[autoName].multiplier
  autoUpgrades[autoName].quantity++


  document.getElementById("autoMultiplier").innerText = autoTotal.toString()
  fossil -= autoUpgrades[autoName].price
  autoUpgrades[autoName].price *= 2
  update()
}

function collectAuto() {
  let total = 0
  for (const key in autoUpgrades) {
    total += (autoUpgrades[key].quantity * autoUpgrades[key].multiplier)
  }

  fossil += total;
  update()
}

// interval function //

function startInterval() {
  setInterval(collectAuto, 3000)
}

// on page load //
update()
startInterval()