import React, { useEffect } from "react";
import { getPokemonDetails } from "../services/GetPokemonDetails";

const PokemonCard = (props) => {
  // getPokemonDetails(props)

  //   useEffect((props) => {
  //     console.log(getPokemonDetails(props));
  //   });
  let sprites = null;

  fetch(props.url)
    .then((response) => response.json())
    .then((pokemonData) => {
      sprites = pokemonData.sprites.front_default;
      console.log(pokemonData);
    });

  //   console.log(props.url);
  return (
    <div>
      <img src={sprites} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default PokemonCard;
