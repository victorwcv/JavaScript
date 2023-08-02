/* Switch

let dia = 3;
switch (dia) {
    case 1: 
        //hace esto
         break;
    case 2:
        //hace esto
        break;
    default:
        //hace esto
}
*/



//Operador ternario

/* 
condicion ? siEsVerdadero : siEsFalso;
*/

let edad = 20;

edad >= 18 ? console.log('Es Mayor') : console.log('Es Menor');

let resultado = edad >= 18 ? console.log('Es Mayor') : console.log('Es Menor');



//ARRAYS

//Declarar arrays

let myArray = [ 1, 2, true, null, 'hola', 8.56]
let mySecondArray = new Array( 1, 2, true, null, 'hola', 8.56 )

console.log(myArray);
console.log(mySecondArray);

//Metodos para AGREGAR o QUITAR elementos a un Array
/*
* push -> agrega al final.
* pop -> elimina desde el final.
* unshift -> agrega al principio del array.
* shift -> elimina desde el principio.

*/

let animales = ['gato', 'perro', 'cerdo'];
console.log(animales);

let largo = animales.push('caballo', 'raton');// agrega todos los elementos al final del array
console.log(animales);
console.log(largo); // push devuelve por defecto el largo del nuevo array

let devuelto = animales.pop(); //quita el ultimo elemento del array
console.log(animales)
console.log(devuelto) //devuelve el elemento que se quito

let devuelto2 = animales.unshift('vaca', 'oso');// agrga los elementos al comienzo del array
console.log(animales);
console.log(devuelto2);//devuelve la cantidad de nuevos elementos que hay


let devuelto3 = animales.shift(); //elimina 1 elemento del comienzo del array
console.log(animales);
console.log(devuelto3) //devuelve el elemento eliminado



//Metodo concat 
// permite unir arrays:

let numeros = [1, 2, 3, 4];
let nombres = ['jose', 'miguel', 'maria'];
let apellidos = ['peres', 'diaz']
let nuevoArray = numeros.concat(nombres, apellidos);//une todos los arrays indicados dentro de los parentesis dentro de un solo array.
console.log(nuevoArray);


//Metodos para buscar dentro de un array

//includes : retorna un boolean dependiendo si encuentra el valor o no.( no funciona en IExplorer).
//indexOf : retorna la posicion del indice si lo encuentra, si no existe retorna -1.

//-----------------------------------------------------------------------------------------------------

//Metodo reverse and join

//reverse -> invierte el sentido del array original cada vez que lo aplico
//join -> me regresa el contenido del array como un string separado como me interese a mi.

const numerosOrdenados = [1, 2, 3, 4, 5, 6];
console.log(numerosOrdenados.reverse())
console.log(numerosOrdenados)

console.log(numerosOrdenados.join());
console.log(numerosOrdenados.join(''));
console.log(numerosOrdenados.join(' '));
console.log(numerosOrdenados.join('/'));
console.log(numerosOrdenados.join(' xxx '));

//------------------------------------------------------------------------------------------------------


//METODO slice

// slice - > crea un nuevo array tomando una porcion del array que usamos o pasamos, 
//debemos indicar indice donde comenzar e indice donde terminar +1.


const mascotas = ['gato', 'perro', 'conejo', 'cuy'];
const mascotaPeque = mascotas.slice(0,3);
console.log(mascotaPeque);

//METODO sort 

// ordena alfabeticamente un array tomando sus valores como strings al hacerlo, 

// por tanto no funciona como uno espera cuando involucra numeros, modifica el original.

const constanteUno = ['puma', 'tigre', 'pantera', 'leon', 'leopardo', 'cobra', 'boa'];
constanteUno.sort();
console.log(constanteUno);


/* METODO splice
se suele utilizar para trabajar con datos que estan en medio de un array, podemos:
quitarlos o removerlos, remplazarlos o incluso agregar nuevos elementos.Se pueden agregar arrays 
splice(index, borrar, agregar) */
//                       0       1         2        3          4         5       6 
const constanteDos = ['puma', 'tigre', 'pantera', 'leon', 'leopardo', 'cobra', 'boa'];
console.log(constanteDos.splice(5,0,"ballena" , 'tiburon'));
console.log(constanteDos);

























