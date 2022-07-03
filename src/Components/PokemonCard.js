import React from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      <PokemonNum num={props.id} />
      <PokemonTypes types={props.types} />
    </div>
  );
};

export default PokemonCard;
