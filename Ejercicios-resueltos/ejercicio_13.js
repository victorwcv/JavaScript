// 14. Sumar arreglo entre el rango
// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// escribe tu respuesta acá

function sumarArreglo(arr, inicial, final) {
    if(inicial > final) return 'rango incorrecto';
    if(inicial === final) return 0;
    let newArr = arr.slice(inicial, final + 1);
    console.log(newArr)
    return newArr.reduce((acumulador, valoractual) => {
        return  acumulador = acumulador + valoractual;
    });
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0