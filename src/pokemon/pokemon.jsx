import pokemonData from '../pokemon/pokemonData.json';

export const pokemonList = () => {
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
        </div>
      ))}
    </div>
  );
};
