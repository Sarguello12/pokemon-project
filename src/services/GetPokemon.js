//   const fetchPokemonDetails = (pokemon) => {
//     let url = pokemon.url;

//     fetch(url)
//       .then((response) => response.json())
//       .then((pokemonData) => {
//         console.log(pokemonData);
//       });
//   };

//   const fetchKantoPokemon = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//       .then((response) => response.json())
//       .then((kantoPokemon) => {
//         kantoPokemon.results.forEach((pokemon) => {
//           fetchPokemonDetails(pokemon);
//         });
//       });
//   };

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

export const getPokemon = ({ url }) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
};

export const getPokemonDetails = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
};

// return fetch(URL)
//   .then((response) => response.json())
//   .then((pokemon) => {
//     pokemon.forEach((poke) => {
//       fetchPokemonDetails(poke.url);
//     });
//   });
// };
