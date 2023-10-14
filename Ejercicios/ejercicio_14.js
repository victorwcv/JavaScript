// 15. Transcribir ADN a ARN
// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// G -> C
// C -> G
// T -> A
// A -> U
// escribe tu función acá

// function transcribir(string) {
//     let arr = string.split("");
//     let newArr = arr.map(element => {
//        if (element === 'G') {
//         return 'C';
//        } else if (element === 'C') {
//         return 'G';
//        } else if (element === 'T') {
//         return 'A'
//        } else if (element === 'A') {
//         return 'U';
//        }
//     })
//     return newArr.join('')
// }

function transcribir(string) {
    const dicccionario = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    }

    return string
    .split('')
    .map(element => dicccionario[element])
    .join('');
}


// código de prueba

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"