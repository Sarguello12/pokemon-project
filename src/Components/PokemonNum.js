import React, { useState, useEffect } from "react";

const PokemonNum = (props) => {
  let originalNum = props.num;

  const [pokemonNum, setPokemonNum] = useState(originalNum);

  useEffect(() => {
    if (originalNum < 10) {
      setPokemonNum("00" + originalNum);
    } else if (originalNum < 100) {
      setPokemonNum("0" + originalNum);
    }
  });

  return <p className={`${pokemonNum} poke-num`}>#{pokemonNum}</p>;
};

export default PokemonNum;
