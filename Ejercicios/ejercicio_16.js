// 17. Capitalizar cada palabra
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:

// escribe tu función acá
function capitalizar(str) {
    let newArr = str.split(" ")
     return newArr
     .map(element => element.charAt(0).toUpperCase() + element.slice(1))
     .join(' ');
}
// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""