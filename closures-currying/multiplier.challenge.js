/* Crea una función multiplicador(a)(b) que retorne a * b. */

function multiplicador(a) {
  return function(b) {
    return a * b
  }
}

const por10 = multiplicador(10);
console.log(por10(5)); // 50
