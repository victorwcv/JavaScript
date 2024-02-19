// const promesaCumplida = false;


// const miPromesa = new Promise((resolve, reject) => {
// setTimeout(() => {
//     if (promesaCumplida) {
//       resolve('Promesa cumplida');
//     } else {
//       reject('Promesa rechazada...')
//     }
//   },3000);
// });

// const manejarPromesaCumplida = (valor) => {
//   console.log(valor);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//   console.log(razonRechazo);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);
 

const estatusPedido = () => {
  const estatus = Math.random() < 0.8;
  console.log(estatus);
  return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(estatusPedido()) {
      resolve('pedido exitoso pedido en camino');
    } else {
      reject('ocurrio un error intente de nuevo');
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeError) => {
  console.log(mensajeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);


const myPromise = new Promise((resolve, reject) => {
  
})

// myPromise
// .then(() => {

// });
// .catch(() => {});