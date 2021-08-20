//memory
document.getElementById('unified-memory').addEventListener('click', function () {
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = memoryCostText.innerText;
    memoryCostText.innerText = parseFloat(memoryCost) + 180;
});
