import React from "react";
import PokemonList from "./Components/PokemonList";

function App() {
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

  // fetchKantoPokemon();

  // const createTypes = (types, ul) => {
  //   types.forEach((type) => {
  //     let typeLi = document.createElement("li");
  //     typeLi.innerText = type["type"]["name"];
  //     ul.append(typeLi);
  //   });
  // };

  // const renderPokemon = (pokemonData) => {
  //   let parentPokemonContainer = document.getElementById("parent-container");
  //   let childPokeonContainer = document.createElement("div");
  //   let pokemonName = document.createElement("h4");
  //   let pokemonNumber = document.createElement("p");
  //   let pokemonType = document.createElement("ul");

  //   pokemonName.innerText = pokemonData.name;
  //   pokemonNumber.innerText = `#${pokemonData.id}`;

  //   createTypes(pokemonData.types, pokemonType);

  //   childPokeonContainer.append(pokemonName, pokemonNumber, pokemonType);
  //   parentPokemonContainer.appendChild(childPokeonContainer);
  // };

  return (
    <div className="app">
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
