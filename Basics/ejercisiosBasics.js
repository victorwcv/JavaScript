
//ejercicio 1

// function isValidPassword(user, pass) {
//     if (pass.length < 8) { 
//         return false;
//     } 
//     if (pass.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (pass.indexOf(user) !== -1){
//         return false;
//     }
//     return true;
//     }
    
// console.log(isValidPassword('Jose','jose5122'));


// ejercicio 2


// function promedio(array) {
//     let prom = 0
//     for (let i of array) {
//         prom += i ;
//     }
//      console.log(prom)
//     return prom/array.length;
// }

// console.log(promedio([6, 7, 8]))


// EJERCICIO 3 

// function check(string) {
//     const letras = 'abcdefghijklmnopqrstuvwxyz';
//     for(let caracter of letras) {
//         if (string.indexOf(caracter) === -1) {
//             return false;
//         }

//     } return true;
// }

// console.log(check('qwertyuiopasdfghjklzxcvbnm'));


// EJERCICIO 4 : (DATO ALEATORIO)
// crear una funcion que reciba un array con datos y me regrese uno de esos datos de forma aleatoria

// function devolver(array) {
//     let y;
//     let indiceRandom = Math.floor(Math.random() * array.length );
//     return array[indiceRandom];
// }

// const x = [true, 5, 80, 'perro', 'casa', false, 16];
// console.log(devolver(x));


// EJERCICIO 5:

function devolver(array) {
        let y;
        let indiceRandom = Math.floor(Math.random() * array.length );
        return array[indiceRandom]; 
}

function dameObjeto () {
    let nombre = devolver(['Alex', 'Miguel', 'Jose', 'Lucy', 'Marcos', 'Javier', 'Pamela', 'Carlos', 'Diego']);
    let apellido = devolver(['Dias', 'Ramirez', 'Vasquez', 'Sanchez', 'Blas', 'Garcia', 'Zapata']);
    return {nombre,apellido};
}

console.log(dameObjeto());
