import React from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      {props.types.map((type) => {
        return <p>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
