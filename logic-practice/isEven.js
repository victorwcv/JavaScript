/* Escribe una función esPar que reciba un número y devuelva true si es par, o false si es impar. */

function isEven(num) {
  if (typeof num !== "number") {
    throw new Error(`Se esperaba un número, pero se recibió: ${typeof num}`);
  }
  return num % 2 === 0;
}


console.log(isEven(3))
console.log(isEven(14024))
console.log(isEven(7))
console.log(isEven(20))