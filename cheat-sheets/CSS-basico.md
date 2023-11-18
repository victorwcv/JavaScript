Selectores:

/* Seleccionar elementos por etiqueta */
etiqueta {
  propiedad: valor;
}

/* Seleccionar elementos por clase */
.clase {
  propiedad: valor;
}

/* Seleccionar elementos por ID */
#identificador {
  propiedad: valor;
}

/* Seleccionar elementos anidados */
elemento padre elemento hijo {
  propiedad: valor;
}

/* Seleccionar elementos por atributo */
[atributo="valor"] {
  propiedad: valor;
}

Propiedades comunes:

/* Color y fondo */
color: #000;
background-color: #fff;

/* Texto */
font-size: 16px;
font-family: Arial, sans-serif;
text-align: center;

/* Espaciado */
padding: 10px;
margin: 10px;

/* Dimensiones */
width: 100px;
height: 100px;

/* Borde */
border: 1px solid #000;
border-radius: 5px;

/* Visualización */
display: block;
visibility: hidden;

/* Posicionamiento */
position: relative;
top: 10px;
left: 10px;

Unidades comunes:
px: píxeles
%: porcentaje
em: relativo al tamaño de fuente del elemento
rem: relativo al tamaño de fuente del elemento raíz
vw: porcentaje del ancho de la ventana
vh: porcentaje de la altura de la ventana

Pseudoclases y pseudoelementos:

/* Pseudoclases */
a:hover {
  propiedad: valor;
}
input:focus {
  propiedad: valor;
}

/* Pseudoelementos */
elemento::before {
  contenido: " ";
}
elemento::after {
  contenido: " ";
}