import React from "react";
import PokemonList from "./Components/PokemonList";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="app">
      <div>
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
