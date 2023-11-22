
// 9. Número de aes (letra "a")
// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

// escribe tu respuesta acá

function numeroDeAes(str) {
    str = str.toString().split('');
    let i = 0;
    for (element of str) {
        if (element === "a") {
            i++
        }
    }
    return i;
}


// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes('')) // 0
console.log(numeroDeAes("amante")) // 0