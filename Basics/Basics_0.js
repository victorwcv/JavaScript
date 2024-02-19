/*
Aplanamiento
Use el método reduce en combinación con el método concat para “aplanar” un
array de arrays en un único array que tenga todos los elementos de los arrays
originales.
*/

function aplanamiento(coleccion) {
    return coleccion.reduce((acu, act) => acu.concat(act),[])
}

console.log(aplanamiento([[1,2,3], [4,5,6], [7,8,9]]))

/*

*/
