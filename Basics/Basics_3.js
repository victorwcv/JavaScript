//Metodos de las Strings

let cadena= 'Hola Mundo desde JavaScript';
console.log(typeof cadena); //typeof = tipo de dato
console.log(cadena.length); // length = largo de cadena
console.log(cadena[5]); // [] = indice de cadena
console.log(cadena[cadena.length - 1]); // ultimo caracter

//Objeto String

let cadena2 = new String ('texto 2');  //crea una clase tipo cadena
console.log (typeof cadena2);

console.log(cadena.charAt(1));
console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());

let cadena3 = '       esto es una          cadena  con problemas de espacios       ';
console.log(cadena3.trim());  //borra los espacios al final y al inicio de la cadena

//METODO indexOf

let saludo = 'Como Estas';
console.log(saludo.indexOf('o'));//te muestra el indice de donde empieza la primera coincidencia en la string.

//Metodo Slice

console.log(saludo.slice(-5)); //corta la palabra de acuerdo a un rango segun el indice de la string

let ingresadoPorUsuario = "$ 550.80";
let pesos = +(ingresadoPorUsuario.slice(2)); //se puede cambiar de tipo de dato con 'Number' o '+' (cortamos la string y la convertimos en tipo numero)
console.log(typeof pesos);
console.log( pesos);

//Metodo replace
console.log(saludo.replace("Estas", 'les va'));// remplaza parte de la string por otra cosa

/* Caracteres de escape

\'
\"
\n salto de linea
\t tabulador
\\ mostrar barra invertida en una cadena

*/

//null - que no tiene ningun valor pero fue asignado con intencion.
//undefined - que no tiene un valor, nadie le dio valor.

let userLogged = null;
console.log(userLogged);
let nadaAqui;
console.log(nadaAqui);
let sinDefinir = undefined;
console.log(sinDefinir);


//Object Math

//Obtener el numero PI
console.log (Math.PI)

//PI con solo 2 decimales
console.log(Math.PI.toFixed(2)); //toFixed ==> recorta decimales

//Quita decimales
console.log (Math.floor(10.32))
console.log (Math.floor(Math.PI))

//Redondear numeros
console.log(Math.round(6.67));

//Pasar numero negativo a su valor absoluto o positivo
console.log(Math.abs(-404))

//Crear numero Aleatorio entre 0 y 1(no incluye 1)
console.log(Math.random());

//Crear numero aleatorio entre 0 y 10. algo
console.log(Math.random() * 10 + 1)

//Crear numero aleatorio entero entre 0 y 10
console.log(Math.floor(Math.random() * 1000 + 1))

//parseInt se usa para convertir en Entero

//parseFloat se usa para convertir en numero de punto flotante


//Operadores de comparacion

/*

>
<

>=
<=

==
!=

===
!==

*/