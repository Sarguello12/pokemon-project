import React from "react";

const URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = () => {
  return fetch(URL).then((response) => response.json());
};
