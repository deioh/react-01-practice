import pokemonData from '../pokemon/pokemonData.json';

export const PokemonList = () => {
  return (
    <div>
      {pokemonData.map(pokemon => (
        <div key={pokemon.id}>
          <p>ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>
            URL: {pokemon.url}
            {pokemon.id}
          </p>
          <img
            src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
            width="360"
            height="336"
            alt="Bulbasaur artwork by Ken Sugimori"
            fetchpriority="high"
          ></img>
        </div>
      ))}
    </div>
  );
};
