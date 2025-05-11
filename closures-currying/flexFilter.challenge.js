/* Crea una función filtrarPorTipo(tipo) que filtre elementos de un array según su tipo (typeof). */

function filtrarPorTipo(tipo = '') {
  return function (array = []) {
    const filtrados = array.filter((element) => typeof element === tipo);
    return {tipo, encontrados: filtrados, cantidad: filtrados.length, log: `Tipo: ${tipo} | Total: ${filtrados.length} | Valores: ${JSON.stringify(filtrados)}`
}
  };
}

const soloNumeros = filtrarPorTipo("number");
const soloStrings = filtrarPorTipo("string");
const soloBooleans = filtrarPorTipo("boolean");

console.log(soloNumeros([1, "hola", true, 5])); // [1, 5]
console.log(soloStrings([1, "hola", true, 5])); 
console.log(soloBooleans([1, "hola", true, 5])); 
