

function rango(inicio,  final, paso = 1) {
    let miArray = [];
    for (let i = inicio; i <= final; i += paso) {
        miArray.push(i);
    }
    return miArray;
}

console.log(rango(10, 100, 10))

function suma(array) {
    return array.reduce((acu,act) => acu += act, 0);
}

console.log(suma(rango(1, 10)));