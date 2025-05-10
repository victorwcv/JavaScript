import { getPokemonInfo } from "./getPokemonInfo.js";
import { retry } from "./utils/retry.js";

async function main() {
  const pokemonIds = [1, 4, 7]

  try {
    const pokemons = await retry( () => getPokemonInfo(pokemonIds), 3, 1000);
    console.log(pokemons)
  } catch (error) {
    console.log(error)
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', main);