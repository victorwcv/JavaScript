/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k, 1)
  let ok = bill.reduce((acu,act) => acu + act, 0) / 2;
  if (b === ok) {
    return 'Bon Appetit';
  } else {
    return b - ok;
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));