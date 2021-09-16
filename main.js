/* VARIABLES */
const purchasePriceIp = document.querySelector('.purchase-price');
const stockQuantityIp = document.querySelector('.stock-quantity');
const currentPriceIp = document.querySelector('.current-price');
const main = document.querySelector('.main');

// let stockPrice = 110;
// currentPriceIp.value = stockPrice;


const btnCheck = document.querySelector('.btn-check');
const message = document.querySelector('.message');


btnCheck.addEventListener('click', checkProfitLoss);

function checkProfitLoss(e) {

    let stockQuantity = stockQuantityIp.value;
    let purchasePrice = purchasePriceIp.value;
    let stockPrice = currentPriceIp.value;

    if(properValues(stockQuantity, purchasePrice, stockPrice)) {
        stockQuantity = Number(stockQuantity);
        purchasePrice = Number(purchasePrice);
        stockPrice = Number(stockPrice);

        const priceDifference = (Math.abs(purchasePrice - stockPrice)).toFixed(2);
        const profitLoss = (priceDifference*stockQuantity).toFixed(2);
        const profitLossPercentage = ((priceDifference / purchasePrice) *100).toFixed(2);

        if(purchasePrice > stockPrice) {
            message.className = "message loss";
            message.innerHTML = `You lost ${profitLossPercentage}%.<br/>Your loss is: ${priceDifference}/ stock. Total loss is: ${profitLoss}`;

            if(profitLossPercentage > 50) {
                changeTheme('loss-theme');
            }
            else {
                changeTheme('gain-loss-theme');
            }
        }
        else if(purchasePrice < stockPrice) {
            message.className = "message profit";
            message.innerHTML = `You gained ${profitLossPercentage}%.<br/>Your profit is: ${priceDifference}/ stock. Total profit is: ${profitLoss}`;

            if(profitLossPercentage > 50) {
                changeTheme('profit-theme');
            }
            else {
                changeTheme('gain-loss-theme');
            }
        }
        else {
            changeTheme('gain-loss-theme');
            message.className = "message no-gain-loss";
            message.innerHTML = `You gained 0%.<br/>Your profit is: 0/ stock. Total profit is: 0`;
        }
    }
}

function properValues(stockQuantity, purchasePrice, stockPrice) {
    if(purchasePrice === "" || stockQuantity === "" || stockPrice === "") {
        message.className = "message error";
        message.innerText = 'Please enter all the values';
        return false;
    }

    else if(Number.parseInt(stockQuantity) <=0 || Number.parseInt(purchasePrice) <= 0 || Number.parseInt(stockPrice) <= 0) {
        message.className = "message error";
        message.innerText = 'Please enter values greater than 0';
        return false;
    }

    else if(!Number.isInteger(Number(stockQuantity))) {
        message.className = "message error";
        message.innerText = 'Please enter a valid value for quantity';
        return false;
    }
    return true;
}

function changeTheme(theme) {
    main.classList.remove('profit-theme');
    main.classList.remove('gain-loss-theme');
    main.classList.remove('loss-theme');

    main.classList.add(theme);
}


// function getValue() {
//     fetch('https://mock-stock-api.herokuapp.com/getValue').then(res => res.json()).then(res => console.log(res));
// }