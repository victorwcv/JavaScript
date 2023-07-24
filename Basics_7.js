// BUCLES
/*
 Bucle for sintaxis :

 for (inicio; condicion; incremento) {
    lo que necesito que se repita
 }

 

let i = 0
for (i; i < 20; i += 2) {
    console.log(i);
}

const misAlumnos = [ 'Juan', 'Pedro', 'Romina', 'Cristian', 'Luis', 'Manuel', 'Adriana'];
for (let i = 0 ; i < misAlumnos.length ; i++) {
    console.log((i + 1) + '. Alumno ' + misAlumnos[i])
}




//Bucle for anidados

const miArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(miArray)
for (let x = 0; x < miArray.length; x++) {
    console.log(miArray[x]);
    let fila = miArray[x];
    for (let y = 0; y < fila.length; y++) {
        console.log(fila[y]);
        
    }
}



const miArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8,],
    [5, 5, 5, 5]
];
console.log(miArray)

let total = 0; 
let totalParcial = 0;
for (let x = 0; x < miArray.length; x++) {
    console.log(miArray[x]);
    let fila = miArray[x];

    for (let y = 0; y < fila.length; y++) {
        
        totalParcial += fila[y];
        console.log(fila[y]);   
    }; 
    console.log(totalParcial);
    total += totalParcial;
    totalParcial = 0 //resetea el valor a cero para la siguiente iteracion
} 

console.log(total);

// BUCLE WHILE  

const numeroSecreto = Math.floor(Math.random() * 10 + 1);
console.log(numeroSecreto);
let numeroMaquina = Math.floor(Math.random() * 10 + 1);

//-------
let intentos = 1;

while (numeroSecreto !== numeroMaquina) {
    console.log(`${numeroSecreto} vs ${numeroMaquina}`);
    numeroMaquina = Math.floor(Math.random() * 10 + 1);
    intentos++;
}
console.log(`${numeroSecreto} vs ${numeroMaquina}`);
console.log(`Ganamos en el intento ${intentos}`);

//break, sale del bucle cuando se cumple
//continue, salta la iteracion cuando se cumple

//BUCLE for of intera en todos los elementos de un array
let cadena = 'Hola Mundo';
for(let elemento of cadena) {
    console.log(elemento);
}
*/

const cliente01 = {
    nombre : 'Juan',
    apellido : 'Vasquez',
    edad : 60,
    nacionalidad : 'Peruano'
}

const llaves = Object.keys(cliente01); //Object.key devuelve las llaves del objeto en forma de array 
const valores = Object.values(cliente01);//Object.values devuelve los valores del objeto en forma de array

console.log(llaves);
console.log(valores);

//Despues de esto podemos iterar los elementos del objeto con el for of

//================================================================================================================

// FOR IN --usado para objetos ,NO esta pensado para los array
// SINTAXIS

// for (let key in objeto) {
//     console.log(objeto[key]);
// }

const ticket01 = {
    sal : 33,
    fosforos : 12,
    yerba : 45,
    azucar : 55,
    pan : 15
}

for (let llaves in ticket01) {
    console.log(llaves)
    console.log(ticket01[llaves])
}



