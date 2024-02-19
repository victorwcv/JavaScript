
const fondo = document.getElementById("fondo");
const color = document.querySelector(".color");
const historial = document.getElementById('historial');

function numAleatorio(arrayDeColores) {
  let a = Math.floor(Math.random() * arrayDeColores.length);
  return a;
}

function cambiarColor() {
  let colorAleatorio = nombresColoresHTML[numAleatorio(nombresColoresHTML)];
  fondo.style.backgroundColor = colorAleatorio;
  console.log(colorAleatorio);
  color.innerHTML = `El color es ${colorAleatorio.charAt(0).toUpperCase() + colorAleatorio.slice(1)}`;
  const nuevoItem = document.createElement('p');
  nuevoItem.textContent = colorAleatorio.charAt(0).toUpperCase() + colorAleatorio.slice(1);
  historial.appendChild(nuevoItem);
}
