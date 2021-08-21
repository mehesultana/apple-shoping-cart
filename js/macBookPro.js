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

//memory

document.getElementById('unified-memory16').addEventListener('click', function () {
    // const memoryCostText = document.getElementById('memory-cost');
    // const memoryCost = memoryCostText.innerText;
    // memoryCostText.innerText = '180';
    // const memoryCostAmount = parseInt(memoryCostText);
    updateMemoryCost(true);
});
document.getElementById('unified-memory8').addEventListener('click', function () {
    // const memoryCostText = document.getElementById('memory-cost');
    // const memoryCost = memoryCostText.innerText;
    // memoryCostText.innerText = '0';
    // const memoryCostAmount = parseInt(memoryCostText);
    updateMemoryCost(false);
});

//Storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = '100';
    const storageCostAmount = parseInt(storageCostText);
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = '180';
    const storageCostAmount = parseInt(storageCostText);
});

document.getElementById('storage-256gb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = '0';
    const storageCostAmount = parseInt(storageCostText);
});

//delivery option

document.getElementById('delivery-aug21').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;
    deliveryChargeText.innerText = '20';
    const deliveryChargeAmount = parseInt(deliveryChargeText);
});

document.getElementById('delivery-aug25').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;
    deliveryChargeText.innerText = '0';
    const deliveryChargeAmount = parseInt(deliveryChargeText);
});

//total
// const total = document.getElementById('total-price');
// const previousTotalText = totalPrice.innerText;
// const previousTotalPrice = parseInt(previousTotalText);
// const newTotalPrice = previousTotalPrice;

// total.innerText = newTotalPrice;
