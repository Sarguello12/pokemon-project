import React from "react";

const PokemonNum = (props) => {
  let pokemonNum = props.num;

  if (pokemonNum < 10) {
    pokemonNum = "00" + pokemonNum;
  } else if (pokemonNum < 100) {
    pokemonNum = "0" + pokemonNum;
  }

  return <p className="poke-num">#{pokemonNum}</p>;
};

export default PokemonNum;
