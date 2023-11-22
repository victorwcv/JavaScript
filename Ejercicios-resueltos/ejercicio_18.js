/* 
Caja registradora

Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria	Importe
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/
// let x = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]



const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

function checkCashRegister(price, cash, cid) {
    let cidTotal = Math.round((cid.reduce((acu, curr) => acu + curr[1], 0) * 100)) / 100;
    let total = { status: '', change: [] };
    let sellChange = cash - price;
    let vuel = 0;

    if (cidTotal < sellChange) {
        total.status = 'INSUFFICIENT_FUNDS';
        total.change = [];
    } else if (cidTotal === sellChange) {
        total.status = 'CLOSED';
        total.change = cid;
    } else {
        total.status = 'OPEN';
        for (let i = values.length - 1; i >= 0; i--) {
            if (sellChange >= values[i] && cid[i][1] > 0) {
                while (sellChange >= values[i] && cid[i][1] > 0) {
                    sellChange = Math.round((sellChange - values[i]) * 100) / 100;
                    cid[i][1] = Math.round((cid[i][1] - values[i]) * 100) / 100;
                    vuel = vuel + values[i];
                }
                total.change.push([cid[i][0], vuel]);
            }
            vuel = 0;
        }
        if (sellChange > 0) {
            total.status = 'INSUFFICIENT_FUNDS';
            total.change = [];
        }
    }

    return total;
}





// checkCashRegister(19.5, 20, x);

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));