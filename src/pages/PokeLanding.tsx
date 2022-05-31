import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import "./pokeLanding.css";

const PokeLanding = () => {
  const totalPokemons: number = 898;
  const [pokemons, setPokemons] = useState([]);
  const [firstPokemons, setFirstPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = () => {
    if (pokemons.length === 0) {
      fetchPokemons()
        .then(({ data, status }) => {
          if (status === 200) {
            setFirstPokemons(data.results);
            setPokemons(data.results);
          } else {
            console.log(`OOPS error : ${status}`);
          }
        })
        .catch((error) => console.log(` Error : ${error}`));
    }
  };
  useEffect(() => {
    getPokemons();
  }, [firstPokemons.length]);

  const handleLoadMore = () => {
    if (pokemons.length <= totalPokemons) {
      setIsLoading(true);
      const pokemonQuantity = pokemons.length;
      fetchPokemons(pokemonQuantity)
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
    <div className="background">
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
      <div className="load-more">
        {!isLoading && (
          <button className="button" onClick={handleLoadMore}>
            Cargar más
          </button>
        )}
      </div>
    </div>
  );
};

export default PokeLanding;
