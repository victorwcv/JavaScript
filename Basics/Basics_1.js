
//Aritmetica


let a = 5;
let b = 2;
let resultado = 0;

resultado = a + b;

resultado = a - b;

resultado = a * b;

resultado = a/ b;

// Modulo
resultado = a % b;

// Potencia (a=base y b=exponente)
resultado = a ** b;

// ----------------------------------

// Orden de precedencia
resultado = 2 + 2 * 5;

resultado = (2 + 2) * 5;
resultado = (2 + 2) * 5 / (2 + 3);
console.log(resultado);
resultado = (4) * 5 / (5);
resultado = (20) / (5);

//===================================================


//Strings

let nombre,  //declarar variables separadas por comas
    apellido,
    nombreCompleto,
    espacio = ' ';

nombre = "Juan"; //
apellido = 'Perez';
nombreCompleto = nombre + apellido;  // con + se concatenan strings.

console.log(nombreCompleto);

console.log(nombre + espacio + apellido); // con + se concatenan strings.
console.log(nombre, espacio, apellido);  //con comas tambien se puede hacer.
console.log('El significado de "DOM" es document object model'); //uso de comillas dentro de una string
console.log('El significado de \'DOM\' es document object model'); // uso del mismo tipo de comillas dentro de la string.
console.log(`El apellido es: ${apellido} y su nombre es: ${nombre}`); //strings con backticks, ya no se usa el + .

//======================================================================================================================

//Test Basics 1 : Programacion en JS

//ARITMETICA

console.log(1.5 + 1.5 * 2)
console.log((10 % 6) ** 2)
console.log(200 + 0 / 0)

//-----------------------------------------


//PROGRAMACION

let A = 3;
let B = 5;
let C = 'resultado';
const YEAR = '2021'

console.log('resultado');
C = A + B;
console.log(C);
console.log(++C);
console.log(C += A);
resultado = B + '10';
console.log(resultado);
console.log(A + 'JS');
let covid19 = 'el ano de la pandemia ';
let resultado1 = covid19 + YEAR;
console.log(resultado1);
//console.log('el ano ' + (++YEAR) + ' seguro estaremos mejor.');