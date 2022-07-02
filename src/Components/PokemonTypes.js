import React, { useState, useEffect } from "react";

const PokemonTypes = (props) => {
  console.log(props.type);
  let pokemonsType = props.type;

  const [pokemonType, setPokemonType] = useState(pokemonsType);

  useEffect(() => {
    switch (pokemonType) {
      case "fire":
        setPokemonType("fire");
        console.log("fire");
        break;
      case "water":
        setPokemonType("water");
        console.log("water");
        break;
      case "grass":
        setPokemonType("grass");
        console.log("grass");
        break;
      case "normal":
        setPokemonType("normal");
        console.log("normal");
        break;
      case "electric":
        setPokemonType("electric");
        console.log("electric");
        break;
      case "ice":
        setPokemonType("ice");
        console.log("ice");
        break;
      case "fighting":
        setPokemonType("fighting");
        console.log("fighting");
        break;
      case "poison":
        setPokemonType("poison");
        console.log("poison");
        break;
      case "ground":
        setPokemonType("ground");
        console.log("ground");
        break;
      case "flying":
        setPokemonType("flying");
        console.log("flying");
        break;
      case "psychic":
        setPokemonType("psychic");
        console.log("psychic");
        break;
      case "bug":
        setPokemonType("bug");
        console.log("bug");
        break;
      case "rock":
        setPokemonType("rock");
        console.log("rock");
        break;
      case "ghost":
        setPokemonType("ghost");
        console.log("ghost");
        break;
      case "dark":
        setPokemonType("dark");
        console.log("dark");
        break;
      case "dragon":
        setPokemonType("dragon");
        console.log("dragon");
        break;
      case "steel":
        setPokemonType("steel");
        console.log("steel");
        break;
      case "fairy":
        setPokemonType("fairy");
        console.log("fairy");
        break;
    }
  });

  return <p className={pokemonType}>{pokemonType}</p>;
};

export default PokemonTypes;
