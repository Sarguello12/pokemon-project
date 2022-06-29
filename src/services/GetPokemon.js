const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const getPokemon = () => {
  return fetch(URL).then((response) => response.json());
};
