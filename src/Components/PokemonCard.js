import React, { useState } from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";

const PokemonCard = (props, { isShiny }) => {
  //   const [isShiny, setIsShiny] = useState(false);

  //   const showShiny = () => {
  //     setIsShiny(true);
  //   };

  return (
    <div className="pokemon-card">
      <img
        src={
          `${isShiny}` === false
            ? props.sprites.front_default
            : props.sprites.front_shiny
        }
      />
      <h3>{props.name}</h3>
      <PokemonNum num={props.id} />
      <PokemonTypes types={props.types} />
    </div>
  );
};

export default PokemonCard;
