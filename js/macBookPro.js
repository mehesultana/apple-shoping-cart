//update Memory Cost

function updateMemoryCost(is16gb) {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = memoryCostText.innerText;

    if (is16gb) {
        memoryCostText.innerText = '180';
        const memoryCostAmount = parseInt(memoryCostText);
    } else {
        memoryCostText.innerText = '0';
        const memoryCostAmount = parseInt(memoryCostText);
    }
}

//update Storage Cost

function updateStorageCost(is512SSD, is1tbSSD) {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = '100';
    const storageCostAmount = parseInt(storageCostText);

    if (is512SSD) {
        storageCostText.innerText = '100';
        const storageCostAmount = parseInt(storageCostText);
    } else if (is512SSD === false) {
        storageCostText.innerText = '180';
        const storageCostAmount = parseInt(storageCostText);
    } else {
        storageCostText.innerText = '0';
        const storageCostAmount = parseInt(storageCostText);
    }
}

//update Delivery Cost
function updateDeliveryCost(isAug21) {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;

    if (isAug21) {
        deliveryChargeText.innerText = '20';
        const deliveryChargeAmount = parseInt(deliveryChargeText);
    } else {
        deliveryChargeText.innerText = '0';
        const deliveryChargeAmount = parseInt(deliveryChargeText);
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

//total
// const total = document.getElementById('total-price');
// const previousTotalText = totalPrice.innerText;
// const previousTotalPrice = parseInt(previousTotalText);
// const newTotalPrice = previousTotalPrice;

// total.innerText = newTotalPrice;
