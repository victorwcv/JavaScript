/* 
!!🔒 Closures
Un closure es cuando una función interna "recuerda" las variables de su contexto externo, incluso después de que ese contexto haya terminado.

✅ ¿Cuándo usarlo?

- Para guardar estado sin variables globales
- Para crear funciones con configuración interna
- Para generar lógica reutilizable (ej: contador, logger)
*/

function saludar(nombre) {
  return function () {
    console.log(`Hola, ${nombre}`);
  };
}
const saludo = saludar("Will");
saludo(); // Hola, Will

function createToggler (initialState = false, syncLocalStorage = false, localStorageKey) {
  let state = initialState

  if (syncLocalStorage) {
    const localStorageValue = localStorage.getItem(localStorageKey)
    if(localStorageValue) {
      state 
    }
  }

  return {
    isOn () {
      return state
    },
    toggle() {
      state = !state
      return state
    },
    setState(newState) {
      state = newState
      return state
    }
  }
}

const sidebarToggler = createToggler() 

sidebarToggler.toggle();
sidebarToggler.toggle();


console.log('estado del sidebar',sidebarToggler.isOn())



/* 
!!🧩 Currying
El currying transforma una función que recibe múltiples argumentos en una serie de funciones que reciben uno por uno.

✅ ¿Cuándo usarlo?

- Cuando querés crear funciones reutilizables con parámetros predefinidos
- Para composición de funciones
- Para construir lógica declarativa y flexible
*/

function multiplicar(a) {
  return function (b) {
    return a * b;
  };
}
const por2 = multiplicar(2);
console.log(por2(5)); // 10


