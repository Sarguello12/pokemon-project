import React, { forwardRef, useState } from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";

const PokemonCard = forwardRef((props) => {
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    isShiny === false ? setIsShiny(true) : setIsShiny(false);
  };

  return (
    <div className="pokemon-card">
      <button onClick={handleClick}>Shiny</button>
      <img
        src={
          isShiny === false
            ? props.sprites.front_default
            : props.sprites.front_shiny
        }
      />
      <h3>{props.name}</h3>
      <PokemonNum num={props.id} />
      <PokemonTypes types={props.types} />
    </div>
  );
});

export default PokemonCard;
