
// Paso por Valor :crea un nuevo espacio de memoria(strings)
// Paso por Referencia :modifica el mismo espacio de memoria (arrays u objetos)


// Metodo every:
// determina si todos los elementos en el array satisfacen una condicion, retorna un boolean.

const edades = [1,15,17,18];
const sonMenoresDeEdad = (edad) => edad <= 18;
let resultado = edades.every(sonMenoresDeEdad); //cada valor del array cumple con la funcion flecha
console.log(resultado);


let a = [20, 33, 21, 31].every(valor => valor >= 18);
let b = [20, 15, 21, 31].every(valor => valor >= 18); //false 15 no es mayor
console.log(a);
console.log(b);

// METODO forEach
// se podria traducir por cada elemento. Por cada elemento mostrame o traeme el elemento o su indice.

const animales = ['puma', 'tigre', 'pantera', 'leon', 'leopardo', 'cobra', 'boa'];
animales.forEach(valor => console.log(valor));

function retornaValores(valor, indice) {
    console.log(`${indice} = ${valor}`);
}
animales.forEach(retornaValores)


// METODO map
// se podria traducir por cada elemento, por cada elemento muestra o trae el elemento o su indice.

const numbers =[1, 2, 3, 4, 5, 6];

const doble = numbers.map(function(valor) {
    return valor * 2
});

console.log(doble);

//==============================================================================================================================


//OBJETOS

//key y valor

const cliente02 = {
    nombre:'Juan',
    apellido: 'Perez',
    edad: '50',
    dni: '73141333',
    domicilio : 'Av. 4 1233'
};

console.log(cliente02);


// OBJETOS
/*
const alumno0054 = {
    nombre: 'Marco',
    apellido: 'Markinso',
    cursa: 'Programacion',
    nota: {
        primerCuat: 19,
        segundoCuat: 15,
        tercercuat: 13
    },
    sobrenombre: 'oso',
    intereses: ['matematicas', 'tecnologia', 'computacion', 'cine'],
    horario: 'turno manana'
}

let promedio = (alumno0054.nota.primerCuat + alumno0054.nota.segundoCuat + alumno0054.nota.tercercuat)/3;
console.log(alumno0054.nota.segundoCuat);
console.log(Math.round(promedio));
console.log(promedio.toFixed(1));

let intereses = alumno0054.intereses[1];
console.log(intereses);
*/

