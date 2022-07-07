import React, { useState, useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon, getPokemonDetails } from "../services/GetPokemon";
import "./PokemonList.css";

const kanto = "limit=151";
const johto = "limit=100&offset=151";
const hoenn = "limit=135&offset=251";
const sinnoh = "limit=108&offset=386";
const unova = "limit=155&offset=494";
const kalos = "limit=72&offset=721";
const alola = "limit=81&offset=809";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [region, setRegion] = useState(kanto);

  const URL = `https://pokeapi.co/api/v2/pokemon?${region}`;

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

  const cardRef = useRef();

  // const handleClick = () => {
  //   cardRef.current.showShiny();
  // };

  const handleChange = (event) => {
    setRegion(event.target.value);
    console.log(event.target.value);
  };

  // state updates happen asynchronously, meaning that updating state does not stop the rest of the application from rendering and running smoothly.
  // So to fix this error, we have to do something called short-circuiting(&&).
  // Basically, we have to first check if the pokemon object is populated and then we can call to it.
  return (
    <div>
      <div>
        {/* <button onClick={handleClick}>Shiny</button> */}
        <select value={region} onChange={handleChange}>
          <option value={kanto}>Kanto</option>
          <option value={johto}>Johto</option>
          <option value={hoenn}>Hoenn</option>
          <option value={sinnoh}>Sinnoh</option>
          <option value={unova}>Unova</option>
          <option value={kalos}>Kalos</option>
          <option value={alola}>Alola</option>
        </select>
      </div>
      <div className="pokemon-container">
        {pokemon &&
          pokemon.map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} ref={cardRef} />;
          })}
      </div>
    </div>
  );
};

export default PokemonList;
