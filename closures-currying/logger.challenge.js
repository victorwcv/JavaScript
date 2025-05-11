/* Crea una función crearLogger(tag) que retorne una función que imprima [tag]: mensaje. */

function createLogger( tag ) {
  const normalizedTag = tag.toUpperCase();
  return function( message ) {
    console.log(`[${normalizedTag}]: ${message}`)
  }
}

const errorLog = createLogger('error')
const warnLog = createLogger('warn')
const succesLog = createLogger('success')

errorLog('Objeto no encontrado')
warnLog('Falta una propiedad')
succesLog('Envio completado correctamente')