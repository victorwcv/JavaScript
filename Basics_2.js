/*

FUNCIONES -------------------------------

Sintaxis - function
----------------------------------------------------
function nombre (parametros, parametros....) {
    //Codigo a ejecutar
    console.log(algo) //No se toma como un valor retornado
    return algo; //Si se toma como un valor retornado. Significa que del otro lado alguien recibira un dato.
}
nombre(argumento1, argumento2);   <=======  Llamado de funcion
-----------------------------------------------------
*/


// function compra(num1, num2) {
//     let resultado = 0;
//     resultado = num1 + num2;
//     return resultado;
// }

//console.log(compra(2, 5));
/*
function compra2(item1, item2) {
    console.log(final);
    return final = `compre ${item1} y despues pedi ${item2}`;
}

compra2('clavos', 'cemento')
*/

//FUNCIONES FLECHA---------------
/*
let funcionFlecha = () => {
    console.log ('esto ejecuta la funcion');
    return 'esto entrega la funcion';
}

console.log(funcionFlecha()); */


//reducir el codigo cuando la funcion solo tiene una linea
const funcionSimple = () => console.log('esto es posible por que solo tiene una linea');
funcionSimple();

//si la funcion solo va a recibir un parametro no es necesario usar los parentesis ()
const funcionSimple2 = unico_parametro => console.log(unico_parametro);
funcionSimple2('pasamos un solo argumento a la funcion flecha');


//FUNCION CALLBACK:
//Es una funcion call back porque recibe una funcion como parametro

function comprar (articulo1, articulo2, funcion) {
    articulo1 = 65;
    articulo2 = 70;
    let gastado = articulo1 + articulo2;
    funcion(gastado);
}

function imprimir (mensaje) {
    console.log(`compramos leche y pan - gastamos ${mensaje}`);
}

comprar( 'leche', 'huevo', imprimir)