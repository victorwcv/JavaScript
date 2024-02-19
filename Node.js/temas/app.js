const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
  console.log(`se realizo una compra $ ${total}`);
  console.log(`numero de productos ${numProductos}`);
})

emisorProductos.emit('compra', 500, 5);