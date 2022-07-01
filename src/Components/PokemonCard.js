import React from "react";
import PokemonNum from "./PokemonNum";
import "./PokemonCard.css";

const PokemonCard = (props) => {
  PokemonNum();
  //   console.log(props.id);
  return (
    <div className="pokemon-card">
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      <p>#{props.id}</p>
      {/* <PokemonNum num={props.id} /> */}
      {props.types.map((type) => {
        return <p>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
