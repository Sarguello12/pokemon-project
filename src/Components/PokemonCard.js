import React, { forwardRef, useState } from "react";
import PokemonNum from "./PokemonNum";
import PokemonTypes from "./PokemonTypes";
import "./PokemonCard.css";

const PokemonCard = forwardRef((props, ref) => {
  const [isShiny, setIsShiny] = useState(false);

  //useImperativeHandle hook accepts 2 mandatory parameters, the first is the reference and the second is the initialization function
  // useImperativeHandle(ref, () => ({
  //   ShowShiny() {
  //     console.log("shiny");
  //   },
  // }));

  const handleClick = () => {
    setIsShiny(true);
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
