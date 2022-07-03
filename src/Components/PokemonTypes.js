import React from "react";

const PokemonTypes = (props) => {
  return (
    <ul>
      {props.types.map((type, index) => {
        return (
          <div>
            <p key={index} className={type.type.name}>
              {type.type.name}
            </p>
          </div>
        );
      })}
    </ul>
  );
};

export default PokemonTypes;
