//update Memory Cost

function updateMemoryCost(is16gb) {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = memoryCostText.innerText;
    const memoryCostAmount = parseInt(memoryCostText.innerText);
    if (is16gb) {
        memoryCostText.innerText = '180';
    } else {
        memoryCostText.innerText = '0';
    }
}

//update Storage Cost

function updateStorageCost(is512SSD, is1tbSSD) {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    const storageCostAmount = parseInt(storageCostText);
    if (is512SSD) {
        storageCostText.innerText = '100';
    } else if (is512SSD === false) {
        storageCostText.innerText = '180';
    } else {
        storageCostText.innerText = '0';
    }
}

//update Delivery Cost
function updateDeliveryCost(isAug21) {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;
    const deliveryChargeAmount = parseInt(deliveryChargeText);
    if (isAug21) {
        deliveryChargeText.innerText = '20';
    } else {
        deliveryChargeText.innerText = '0';
    }
}

//memory

document.getElementById('unified-memory16').addEventListener('click', function () {
    updateMemoryCost(true);
});
document.getElementById('unified-memory8').addEventListener('click', function () {
    updateMemoryCost(false);
});

//Storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateStorageCost(true);
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    updateStorageCost(false);
});

document.getElementById('storage-256gb').addEventListener('click', function () {
    updateStorageCost();
});

//delivery option

document.getElementById('delivery-aug21').addEventListener('click', function () {
    updateDeliveryCost(true);
});

document.getElementById('delivery-aug25').addEventListener('click', function () {
    updateDeliveryCost(false);
});

//total calculate

function updateTotal() {
    const total = document.getElementById('total-price');
    const memoryCostAmount = parseInt(memoryCostText.innerText);
    const storageCostAmount = parseInt(storageCostText);
    const deliveryChargeAmount = parseInt(deliveryChargeText);
    const grandTotal = memoryCostAmount + storageCostAmount + deliveryChargeAmount;

    total.innerText = grandTotal;
}

//total
// const total = document.getElementById('total-price');

// const previousTotalText = totalPrice.innerText;
// const previousTotalPrice = parseInt(previousTotalText);
// const newTotalPrice = previousTotalPrice;

// total.innerText = newTotalPrice;
