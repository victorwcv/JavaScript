function pageCount(n, p) {
  // Calcula los giros desde el principio del libro
  const frontTurns = Math.floor(p / 2);

  // Calcula los giros desde el final del libro
  const backTurns = Math.floor(n / 2) - frontTurns;

  // Devuelve el mínimo de giros
  return Math.min(frontTurns, backTurns);
}

console.log(pageCount(60113, 8589));
