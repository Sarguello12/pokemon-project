function App() {
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/mudkip/";

  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((mudkip) => console.log(mudkip))
    .catch((error) => console.log(error));

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
}

export default App;
