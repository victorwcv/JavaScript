// 12. Multiplicar arreglo
// Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

// escribe tu respuesta acá

function multiplicarArreglo(Arr) {
    let total = 1;
    for(element of Arr) {
        total *= element;
    }
    return total;
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1