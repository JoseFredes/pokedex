import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import "./pokeLanding.css";

const PokeLanding = () => {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const data = await fetchPokemons();
    setPokemons(data.results);
  };
  const handleLoadMore = async () => {
      const pokemonQuantity = pokemons.length
      await fetchPokemons(pokemonQuantity)

  }

  useEffect(() => {
    getPokemons();
    // handleLoadMore();
  },[pokemons.length]);
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
        <button className="btn-load-more" onClick={handleLoadMore}>Cargar más</button>
      </div>
    </div>
  );
};

export default PokeLanding;
