import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchPokemon = async () => {
      let response = await getPokemonDetails(
        `https://pokeapi.co/api/v2/pokemon?${region}`
      );
      await populatePokemon(response.results);
    };
    fetchPokemon();
    // Notice the empty array following the useEffect call. Note that the useEffect runs for both a component mounting and updating.
    // If you do not pass a dependency array into useEffect it will continuously update. If you pass an empty dependency array into the call it will only run once on component mount.
    // UPDATE: changed to hold region state so useEffect will run when state is updated
  }, [region]);

  const populatePokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (poke) => {
        let pokemonGet = await getPokemon(poke);
        return pokemonGet;
      })
    );
    setPokemon(pokemonData);
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  // state updates happen asynchronously, meaning that updating state does not stop the rest of the application from rendering and running smoothly.
  // So to fix this error, we have to do something called short-circuiting(&&).
  // Basically, we have to first check if the pokemon object is populated and then we can call to it.
  return (
    <div>
      <div className="nav">
        <div>
          <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png" />
        </div>
      </div>
      <div className="nav2">
        <div className="nav2__lil">
          <p>Search by region</p>
          <div className="custom-select">
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
        </div>
      </div>
      <div className="pokemon-container">
        <div className="pokemon">
          {pokemon &&
            pokemon.map((pokemon, index) => {
              return <PokemonCard key={index} {...pokemon} />;
            })}
        </div>
      </div>

      <div className="footer">
        <div className="lil-footer">
          <div class="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
