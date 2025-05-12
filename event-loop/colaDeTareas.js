
function tarea(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tarea ${id} completada`);
      resolve();
    }, delay);
  });
}

// Ejecución en paralelo
async function ejecutarTareasEnParalelo() {
  const promesa1 = tarea(1, 1000);
  const promesa2 = tarea(2, 1000);
  const promesa3 = tarea(3, 1000);

  Promise.all([promesa1, promesa2, promesa3]);
}

// Ejecucion en serie

async function ejecutarTareasEnSerie() {
  await tarea(1, 1000);
  await tarea(2, 1000);
  await tarea(3, 1000);
}

// ejecutarTareasEnParalelo();
ejecutarTareasEnSerie();
