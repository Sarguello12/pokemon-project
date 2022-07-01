import React from "react";

const PokemonNum = (props) => {
  let num = props;

  if (props < 10) {
    num = "00" + props;
  } else if (props < 100) {
    num = "0" + props;
  }
  console.log(props);
  //   return <p>{num}</p>;
};

export default PokemonNum;
