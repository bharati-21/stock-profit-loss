/* VARIABLES */
const purchasePriceIp = document.querySelector('.purchase-price');
const stockQuantityIp = document.querySelector('.stock-quantity');
const currentPriceIp = document.querySelector('.current-price');

currentPriceIp.value = 110;

const btnCheck = document.querySelector('.btn-check');
const message = document.querySelector('.message');

btnCheck.addEventListener('click', checkProfitLoss);

function checkProfitLoss(e) {
    if(!properValues()) {
        message.className = "message error";
        message.innerText = 'Enter proper values';
    }
}

function properValues() {
    const stockQuantity = stockQuantityIp.value;
    const purchasePrice = purchasePriceIp.value;

    if(purchasePrice === "" || stockQuantity === "" ) {
        return false;
    }
    return true;
}