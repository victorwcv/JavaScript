/*
Aplanamiento de arrays
Use el método reduce en combinación con el método concat para “aplanar” un
array de arrays en un único array que tenga todos los elementos de los arrays
originales.
*/

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function aplanamiento(coleccion) {
  return coleccion.reduce((acu, act) => acu.concat(act), []);
}

console.log(aplanamiento(array));

function aplanamiento2(coleccion) {
  return [].concat(...coleccion);
}

console.log(aplanamiento2(array));

function aplanamiento3(coleccion = []) {
  return coleccion.flat();
}

console.log(aplanamiento3(array));

//Aplanamiento de objetos

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const resultados = {
  Entries: Object.entries(obj),
  Keys: Object.keys(obj),
  Values: Object.values(obj),
};

console.log(resultados);

//Uso de FlatMap

const data = {
  frontend: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
  backend: [{ name: "Node" }, { name: "Express" }, { name: "MongoDB" }],
  design: [{ name: "Figma" }, { name: "Photoshop" }, { name: "Illustrator" }],
};

const unicoArray = Object.values(data).flatMap((elemento) => elemento);

console.log(unicoArray);

const result = unicoArray.find((elemento) =>
  elemento?.name === "MongoDB"
).name || "Not Found";


console.log(result);

//Principale metodos de arrays


 /* 
 
 1 Metodo find:
    -> retorna el primer elemento que cumple la condicion.

 2 Metodo findIndex:
    -> retorna el indice del primer elemento que cumple la condicion.

 3 Metodo filter:
    -> retorna un nuevo array con los elementos que cumplen la condicion.

 4 Metodo map:
    -> retorna un nuevo array con los elementos modificados.

 5 Metodo reduce:
    -> retorna un nuevo array con los elementos modificados.

 6 Metodo every:
    -> retorna un boolean dependiendo si todos los elementos cumplen la condicion.

 7 Metodo some:
    -> retorna un boolean dependiendo si alguno de los elementos cumple la condicion.

 8 Metodo forEach:
    -> ejecuta una funcion para cada elemento del array, no retorna ningun valor. Suele usarse para recorrer el array y ejecutar una accion como mostrar en pantalla o modificar el array original.


*/