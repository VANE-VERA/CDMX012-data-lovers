// estas funciones son de ejemplo
/* eslint-disable no-console */
import pokedata from './data/pokemon/pokemon.js';

export const allPokemon = () => {
  return pokedata.pokemon;
};
//función para filtrar data por tipo
export const filterType = () => {
  

}


export const sortAlphabetically = (pokemons) => {
  pokemons.sort((a, b) => a.name.localeCompare(b.name));
  return pokemons;
};