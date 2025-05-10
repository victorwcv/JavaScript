export async function getPokemonInfo(ids) {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const promises = ids.map((id) =>
    fetch(`${url}/${id}`).then((res) => {
      if (!res.ok) {
        throw new Error(`Error al obtener el Pokémon con ID ${id}`);
      }
      return res.json();
    })
  );

  const resultado = await Promise.allSettled(promises);

  const exitosos = resultado.filter(({ status }) => status === "fulfilled");
  const errores = resultado.filter(({ status }) => status === "rejected");

    // 🔥 SI hubo errores, lanza uno para activar el retry
  if (errores.length > 0) {
    throw new Error(`Fallo la carga de ${errores.length} pokémon(es)`);
  }

  return {
    success: exitosos.map(({ value: pokemon }) => ({
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      types: pokemon.types.map((type) => type.type.name),
    })),
    errors: errores.map(({ reason }) => reason),
  };
}
