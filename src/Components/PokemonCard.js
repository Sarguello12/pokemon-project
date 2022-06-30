import React from "react";

const PokemonCard = (props) => {
  return (
    <div>
      <img src={props.sprites.front_default} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default PokemonCard;
