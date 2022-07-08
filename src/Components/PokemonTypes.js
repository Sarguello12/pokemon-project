import React from "react";

const PokemonTypes = (props) => {
  return (
    <ul>
      {props.types.map((type, index) => {
        return (
          <div>
            <div className="type-card">
              <p key={index} className={`${type.type.name} type`}>
                {type.type.name}
              </p>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default PokemonTypes;
