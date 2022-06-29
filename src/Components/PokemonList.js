import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "../services/GetPokemon";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon().then((pokemonData) => {
      setPokemon(pokemonData);
      // console.log(pokemonData);
    });
    // Notice the empty array following the useEffect call. Note that the useEffect runs for both a component mounting and updating.
    // If you do not pass a dependency array into useEffect it will continuously update. If you pass an empty dependency array into the call it will only run once on component mount.
  }, []);

  // state updates happen asynchronously, meaning that updating state does not stop the rest of the application from rendering and running smoothly.
  // So to fix this error, we have to do something called short-circuiting(&&).
  // Basically, we have to first check if the pokemon object is populated and then we can call to it.
  console.log(pokemon);
  return (
    <div>
      <div>
        {Object.entries(pokemon)[3] &&
          Object.entries(pokemon)[3][1].map((poke, index) => {
            return <PokemonCard key={index} {...poke} id={index + 1} />;
          })}
      </div>
    </div>
  );
};

export default PokemonList;
