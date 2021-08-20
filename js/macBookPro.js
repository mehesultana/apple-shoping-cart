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
