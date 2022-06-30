import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon, getPokemonDetails } from "../services/GetPokemon";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, isLoading] = useState(true);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

  useEffect(() => {
    const fetchPokemon = async () => {
      let response = await getPokemonDetails(URL);
      await populatePokemon(response.results);
      isLoading(false);
    };
    fetchPokemon();
    // Notice the empty array following the useEffect call. Note that the useEffect runs for both a component mounting and updating.
    // If you do not pass a dependency array into useEffect it will continuously update. If you pass an empty dependency array into the call it will only run once on component mount.
  }, []);

  const populatePokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (poke) => {
        let pokemonGet = await getPokemon(poke);
        return pokemonGet;
      })
    );
    setPokemon(pokemonData);
  };

  // state updates happen asynchronously, meaning that updating state does not stop the rest of the application from rendering and running smoothly.
  // So to fix this error, we have to do something called short-circuiting(&&).
  // Basically, we have to first check if the pokemon object is populated and then we can call to it.
  console.log(pokemon);
  return (
    <div>
      <div>
        {pokemon.map((poke, i) => {
          return <PokemonCard key={i} pokemon={poke} />;
        })}
      </div>
    </div>
  );
};

export default PokemonList;
