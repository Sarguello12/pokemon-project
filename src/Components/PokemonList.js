import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon, getPokemonDetails } from "../services/GetPokemon";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    const fetchPokemon = async () => {
      let response = await getPokemonDetails(URL);
      await populatePokemon(response.results);
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

  // const childRef = React.forwardRef();
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = () => {
    setIsShiny(true);
  };

  // state updates happen asynchronously, meaning that updating state does not stop the rest of the application from rendering and running smoothly.
  // So to fix this error, we have to do something called short-circuiting(&&).
  // Basically, we have to first check if the pokemon object is populated and then we can call to it.
  return (
    <div>
      <button onClick={handleClick}>Shiny</button>
      <div className="pokemon-container">
        {pokemon &&
          pokemon.map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} isShiny={isShiny} />;
          })}
      </div>
    </div>
  );
};

export default PokemonList;
