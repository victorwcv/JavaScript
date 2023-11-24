/*
Revirtiendo un array
Los arrays tienen un método reverse que cambia al array invirtiendo el orden
en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
un array como argumento y produce un nuevo array que tiene los mismos elementos
pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
que hace el métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las funciones puras
en el capítulo anterior, qué variante esperas que sea útil en más situaciones?
Cuál corre más rápido?
*/

function revertirArray(array) {
    const newArray = [];
    for (let element of array) {
        newArray.unshift(element);
    }
    return newArray;
}

let a = '1 2 3 4 5 6 7 8 9'.split(' ');

console.log(revertirArray(a));

console.log(a)


function revertitArrayEnSuLugar(array) {
    for (let i = 0; i < array.length; i++) {
        let x = array.pop();
        array.splice(i,0,x);
    }
    return array;
}

console.log(revertitArrayEnSuLugar(a))

console.log(a)
