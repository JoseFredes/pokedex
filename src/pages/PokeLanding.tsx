import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import "./pokeLanding.css";
import pokeball from '../assets/pokeball.png'
const PokeLanding = () => {
  const totalPokemons: number = 898;
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getPokemons = () => {
    fetchPokemons()
      .then(({ data, status }) => {
        if (status === 200) {
          setPokemons(data.results);
        } else {
          console.log(`OOPS error : ${status}`);
        }
      })
      .catch((error) => console.log(` Error : ${error}`));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleLoadMore = async () => {
    if (pokemons.length <= totalPokemons) {
     setIsLoading(true);
      const pokemonQuantity = pokemons.length;
      await fetchPokemons(pokemonQuantity)
        .then(({ data, status }) => {
          if (status === 200) {
            setPokemons(pokemons.concat(data.results));
            setIsLoading(false);
          } else {
            console.log(`OOPS error : ${status}`);
          }
        })
        .catch((error) => console.log(` Error : ${error}`));
    }
  };

  return (
    <div>
      <div className="cards">
        {pokemons.map((pokemon: { name: string; url: string }, id) => {
          const idPokemon = pokemon.url.split("/")[6];
          return (
            <PokemonCard
              id={idPokemon}
              name={pokemon.name}
              url={pokemon.url}
              key={id}
            />
          );
        })}
      </div>
      <div>
        {!isLoading && <button className="btn-load-more" onClick={handleLoadMore}>
          Cargar más
        </button>}
        {isLoading && <img src={pokeball} alt="pokeball"></img>}
      </div>
    </div>
  );
};

export default PokeLanding;
