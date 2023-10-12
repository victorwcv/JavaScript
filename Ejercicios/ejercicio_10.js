
// 11. Sumar arreglo
// Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.

// escribe tu respuesta acá

function sumarArreglo(Arr) {
    let total = 0;
    for(element of Arr) {
        total += element;
    }
    return total;
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
