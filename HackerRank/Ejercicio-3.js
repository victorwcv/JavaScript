/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  let daysInFebruary = 28;

  // Verificar si es el año 1918
  if (year === 1918) {
    daysInFebruary = 15; // Febrero tiene 15 días en 1918
  } else if (
    // Verificar si es un año juliano (antes de 1918)
    (year < 1918 && year % 4 === 0) ||
    // Verificar si es un año gregoriano (después de 1918)
    (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    daysInFebruary = 29; // Si es bisiesto, febrero tiene 29 días
  }

  let daysUntilProgrammersDay = 256;
  const monthsDays = [
    31, daysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  let day = 0;
  let month = 0;

  // Encontrar el día del programador
  for (let i = 0; i < monthsDays.length; i++) {
    if (daysUntilProgrammersDay > monthsDays[i]) {
      daysUntilProgrammersDay -= monthsDays[i];
    } else {
      month = i + 1;
      day = daysUntilProgrammersDay;
      break;
    }
  }

  // Formatear día y mes con ceros a la izquierda si son menores que 10
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}.${formattedMonth}.${year}`;
}
console.log(dayOfProgrammer(2017));