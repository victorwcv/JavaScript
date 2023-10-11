// 8. Sumar rango de números
// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// escribe tu respuesta acá

function sumarRango(numInicial, numFinal) {
    
    let acumulador = 0;
    if (numInicial === numFinal) {

        return acumulador

    } else {
        for (let i = numInicial; i <= numFinal; i++) {
        acumulador = acumulador + i;
        }
    }

    return acumulador;
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0