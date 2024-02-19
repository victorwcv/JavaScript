//  MODULO console 

// console.log();
// console.warn();
// console.error();
// console.dir();
// console.assert();
// console.table();

// ---------------------------------------------------

// MODULO process

// console.log(process);
// console.log(process.memoryUsage());

// ---------------------------------------------------

//MODULO OS

// const os = require('os')

// console.log(os.type()); 
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

// MODULO timers

// setTimeout('funcion', 'retraso', 'argumentos de la funcion...');

// setImmediate('funcion', 'argumentos...') se ejecuta despues de todo el codigo sincrono.

// setInterval('funcion', 'intervalo', 'argumentos...');

// ----------------------------------------------------

// MODULO fs 

const fs = require('fs');

console.log('antes de leer el archivo')

// Leer un archivo
fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    throw err;
  } 
  console.log('archivo leido');
});

console.log('despues de leer el archivo')

// Cambiar nombre de archivo
fs.rename('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('nombre cambiado con exito')
})

console.log('despues de cambiar el nombre del archivo')

// agregar contenido al final del archivo
fs.appendFile('main.html', '<p>Hola</p>', (err) => {
  if (err) {
    throw err;
  }
  console.log('archivo actualizado');
})

console.log('despues de agregar contenido')


// reemplazar todo el contenido del archivo

fs.writeFile('main.html', 'contenido nuevo', (err) => {
  if (err) {
    throw err;
  }
  console.log('contenido reemplazado');
})

// Eliminar archivos

fs.unlink('main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Archivo eliminado');
})