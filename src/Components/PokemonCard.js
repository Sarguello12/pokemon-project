import React from "react";
import "./PokemonCard.css";
import { getTypeColor } from "../services/DisplayType";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      <p>#{props.id}</p>
      {props.types.map((type) => {
        return <p>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
