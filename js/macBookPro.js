// getting all by id

const totalmemoryCost = document.getElementById('memory-cost');
const totalstorageCost = document.getElementById('storage-cost');
const totaldeliveryCost = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');
const macPrice = document.getElementById('best-price');
const promoInput = document.getElementById('promoCode');
const promoDiscountPriceText = document.getElementById('total-amount');

// 8GB Memory
document.getElementById('unified-memory8').addEventListener('click', function () {
    totalmemoryCost.innerText = '0';
    updateAll();
});
// 16 GB Memory
document.getElementById('unified-memory16').addEventListener('click', function () {
    totalmemoryCost.innerText = '180';
    updateAll();
});
//   total memory end

// total storage cost start

// 256 GB SSD
document.getElementById('storage-256gb').addEventListener('click', function () {
    totalstorageCost.innerText = '0';
    updateAll();
});

// 512 GB SSD
document.getElementById('storage-512gb').addEventListener('click', function () {
    totalstorageCost.innerText = '100';
    updateAll();
});

// 1TB SSD
document.getElementById('storage-1tb').addEventListener('click', function () {
    totalstorageCost.innerText = '180';
    updateAll();
});
// total storage end

//total delivery cost start

// free delivery
document.getElementById('delivery-aug25').addEventListener('click', function () {
    totaldeliveryCost.innerText = '0';
    updateAll();
});

// paid delivery of 20
document.getElementById('delivery-aug21').addEventListener('click', function () {
    totaldeliveryCost.innerText = '20';
    updateAll();
});
//total delivery cost end

// apply promo and get discount
document.getElementById('applyPromo').addEventListener('click', function () {
    discountOffer();
});

// update function
function updateAll() {
    const bestPrice = parseFloat(macPrice.innerText);
    const extraMemoryCost = parseFloat(totalmemoryCost.innerText);
    const extraStorageCost = parseFloat(totalstorageCost.innerText);
    const extraDeliveryCost = parseFloat(totaldeliveryCost.innerText);
    const finalTotalPrice = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    totalPrice.innerText = finalTotalPrice;
    promoDiscountPriceText.innerText = totalPrice.innerText;
}

// promo code apply function
function discountOffer() {
    let discountPrice = parseFloat(promoDiscountPriceText.innerText);
    promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        promoDiscountPriceText.innerText = ((totalPrice.innerText / 100) * 80).toFixed(2);
    }

    promoInput.value = '';
}
// console.log(total.toFixed(2));
