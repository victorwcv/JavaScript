✅ JavaScript EventLoop:

El Event Loop de JavaScript es el mecanismo que permite a JS manejar operaciones asincrónicas en un solo hilo de ejecución.

El ciclo de ejecución consta de:

**Call Stack** (la pila): donde se ejecutan las funciones sincrónicas.

**Microtasks Queue**: tareas que tienen alta prioridad y se procesan inmediatamente después del stack. Aquí van:

* `.then()` / `.catch()` / `.finally()` de Promesas
* `async/await` (después del `await`)
* `queueMicrotask()`

**Macrotasks Queue** (también llamada Task Queue): tareas con menor prioridad que se ejecutan después de vaciar la Microtask Queue. Ejemplos:

* `setTimeout`
* `setInterval`
* `setImmediate` (en Node.js)
* `requestAnimationFrame` (en browsers)

🕓 Orden de ejecución:
**Stack sincrónico** → **Microtasks** → **Macrotasks** → (se repite el ciclo)
