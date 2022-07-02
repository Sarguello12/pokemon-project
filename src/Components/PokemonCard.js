import React from "react";
import PokemonNum from "./PokemonNum";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      <PokemonNum num={props.id} />
      {props.types.map((type, index) => {
        return <p key={index}>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
