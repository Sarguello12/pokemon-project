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
      {/* <p>{props.id}</p> */}
      <img
        src={
          isShiny === false
            ? props.sprites.front_default
            : props.sprites.front_shiny
        }
      />
      <FontAwesomeIcon
        icon={faHandSparkles}
        onClick={handleClick}
        className="shiny-icon"
      />
      <h3 className="pokemon-card__name">{props.name}</h3>
      <div className="info">
        <PokemonTypes types={props.types} />
      </div>
    </div>
  );
});

export default PokemonCard;
