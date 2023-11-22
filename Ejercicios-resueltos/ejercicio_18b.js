const denominations = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
};

function roundToTwoDecimals(value) {
    return Math.round(value * 100) / 100;
}

function checkCashRegister(price, cash, cid) {
    let total = { status: '', change: [] };
    let sellChange = cash - price;
    let vuel = 0;

    for (let i = Object.keys(denominations).length - 1; i >= 0; i--) {
        const denom = Object.keys(denominations)[i];
        const value = denominations[denom];
        const available = roundToTwoDecimals(cid[i][1]);
        const maxToUse = Math.min(available, sellChange);

        if (maxToUse >= value) {
            while (maxToUse >= value && sellChange >= value) {
                maxToUse -= value;
                sellChange -= value;
                vuel += value;
            }
            total.change.push([denom, vuel]);
        }
        vuel = 0;
    }

    if (sellChange === 0) {
        total.status = 'CLOSED';
        total.change = cid;
    } else if (sellChange > 0) {
        total.status = 'INSUFFICIENT_FUNDS';
        total.change = [];
    } else {
        total.status = 'OPEN';
    }

    return total;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));