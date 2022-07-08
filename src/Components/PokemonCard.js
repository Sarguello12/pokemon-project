import React, { forwardRef, useState } from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";

const PokemonCard = forwardRef((props) => {
  const [isShiny, setIsShiny] = useState(false);

  const handleClick = () => {
    isShiny === false ? setIsShiny(true) : setIsShiny(false);
  };

  return (
    <div className="pokemon-card">
      <PokemonNum num={props.id} />

      <img
        src={
          isShiny === false
            ? props.sprites.front_default
            : props.sprites.front_shiny
        }
      />
      <FontAwesomeIcon icon={faHandSparkles} onClick={handleClick} />
      <h3>{props.name}</h3>
      <PokemonTypes types={props.types} />
    </div>
  );
});

export default PokemonCard;
