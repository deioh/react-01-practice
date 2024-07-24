import pokemonData from '../pokemon/pokemonData.json';
import styles from './pokemon.module.css';
export const PokemonList = () => {
  return (
    <div className={styles.div}>
      {pokemonData.map(pokemon => (
        <div className={styles.box} key={pokemon.id}>
          <p>ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>
            <a
              href={`https://pokemondb.net/pokedex/${pokemon.name}`}
              target="blank"
            >
              <img
                src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                width="360"
                height="336"
                alt="Artwork by Ken Sugimori"
                fetchpriority="high"
              ></img>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};
