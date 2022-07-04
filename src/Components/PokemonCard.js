import React from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  let shiny = false;

  return (
    <div className="pokemon-card">
      <img
        src={
          shiny === false
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
