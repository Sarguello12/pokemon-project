import React from "react";

const PokemonCard = (props) => {
  return (
    <div>
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
      {props.types.map((type) => {
        return <p>{type.type.name}</p>;
      })}
    </div>
  );
};

export default PokemonCard;
