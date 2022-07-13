import React from "react";

const PokemonSearch = () => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Search by Pokemon:</label>
        <input type="text" onChange={searchChangeHandler}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default PokemonSearch;
