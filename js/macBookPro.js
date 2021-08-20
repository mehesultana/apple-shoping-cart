//memory
document.getElementById('unified-memory16').addEventListener('click', function () {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = memoryCostText.innerText;
    memoryCostText.innerText = parseFloat(memoryCost) + 180;
});
document.getElementById('unified-memory8').addEventListener('click', function () {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = memoryCostText.innerText;
    memoryCostText.innerText = parseFloat(memoryCost) * 0;
});

//Storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = parseFloat(storageCost) + 100;
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = parseFloat(storageCost) + 180;
});

document.getElementById('storage-256gb').addEventListener('click', function () {
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = storageCostText.innerText;
    storageCostText.innerText = parseFloat(storageCost) * 0;
});

//delivery option

document.getElementById('delivery-aug21').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;
    deliveryChargeText.innerText = parseFloat(deliveryCharge) + 20;
});

document.getElementById('delivery-aug25').addEventListener('click', function () {
    const deliveryChargeText = document.getElementById('delivery-charge');
    const deliveryCharge = deliveryChargeText.innerText;
    deliveryChargeText.innerText = parseFloat(deliveryCharge) * 0;
});

//total
