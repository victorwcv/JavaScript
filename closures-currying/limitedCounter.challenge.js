/* Crea una función crearContadorConLimite(limite) que devuelva una función que cuente desde 1 hasta el limite y luego se reinicie. */

function crearContadorConLimite(limite) {
  let actual = 1;
  return function () {
    if (actual > limite) {
      actual = 1;
    } 
    const valor = actual
    actual += 1
    return valor;
  };
}

const contadorHasta3 = crearContadorConLimite(3);

console.log(contadorHasta3());
console.log(contadorHasta3());
console.log(contadorHasta3());
console.log(contadorHasta3());
console.log(contadorHasta3());
console.log(contadorHasta3());

let x = 1;
console.log(x++); // 1
console.log(x);   // 2

let y = 1;
console.log(++y); // 2
console.log(y);   // 2
