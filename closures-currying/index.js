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

function createToggler(initialState = false, syncLocalStorage = false, localStorageKey) {
  if (syncLocalStorage && !localStorageKey) {
    throw new Error("localStorageKey is required when syncLocalStorage is true");
  }

  const storage = syncLocalStorage
    ? {
        get: () => {
          const value = localStorage.getItem(localStorageKey);
          return value ? JSON.parse(value) : initialState;
        },
        set: (value) => {
          localStorage.setItem(localStorageKey, JSON.stringify(value));
        }
      }
    : null;

  let state = storage ? storage.get() : initialState;

  const persist = () => {
    if (storage) storage.set(state);
  };

  return {
    isOn() {
      return state;
    },
    toggle() {
      state = !state;
      persist();
      return state;
    },
    setState(newState) {
      state = newState;
      persist();
      return state;
    }
  };
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


