function App() {
  const fetchPokemonDetails = (pokemon) => {
    let url = pokemon.url;

    fetch(url)
      .then((response) => response.json())
      .then((pokemonData) => {
        console.log(pokemonData);
      });
  };

  const fetchKantoPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((kantoPokemon) => {
        kantoPokemon.results.forEach((pokemon) => {
          fetchPokemonDetails(pokemon);
        });
      });
  };

  console.log(fetchKantoPokemon());

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
}

export default App;
