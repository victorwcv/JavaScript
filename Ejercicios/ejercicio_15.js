// 16. Capitalizar palabra
// Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

// escribe tu función acá

function capitalizar(string) {
    
    if (string !== '') {
     
    return string.charAt(0).toUpperCase() + string.slice(1);   
    }

    return '';
    
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""