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
      {props.types.map((type, index) => {
        // return <PokemonTypes key={index} type={type.type.name} />;
        return (
          <div>
            <p key={index} className={type.type.name}>
              {type.type.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonCard;
