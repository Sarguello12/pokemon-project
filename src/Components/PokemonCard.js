import React, { useEffect } from "react";
import { getPokemonDetails } from "../services/GetPokemonDetails";

const PokemonCard = (props) => {
  console.log(getPokemonDetails(props));

  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default PokemonCard;
