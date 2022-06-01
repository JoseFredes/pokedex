import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../utils/fetch/fetchPokemon";
import PokemonCard from "../components/PokemonCard";
import eve from "../assets/eve.png";
import "../index.css";

const PokeLanding = () => {
  const totalPokemons: number = 898;
  const [pokemons, setPokemons] = useState(
    JSON.parse(localStorage.getItem("pokemon")!) || []
  );
  const [firstPokemons, setFirstPokemons] = useState(
    JSON.parse(localStorage.getItem("firtsPokemons")!) || []
  );
  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = () => {
    if (pokemons.length === 0) {
      fetchPokemons()
        .then(({ data, status }) => {
          if (status === 200) {
            setFirstPokemons(data.results);
            setPokemons(data.results);
            localStorage.setItem("pokemon", JSON.stringify(data.results));
            localStorage.setItem("firtsPokemons", JSON.stringify(data.results));
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
            localStorage.setItem(
              "pokemon",
              JSON.stringify(pokemons.concat(data.results))
            );
            setIsLoading(false);
          } else {
            console.log(`OOPS error : ${status}`);
          }
        })
        .catch((error) => console.log(` Error : ${error}`));
    }
  };

  const handleColapseItems = () => {
    setPokemons(firstPokemons);
    localStorage.setItem("pokemon", JSON.stringify(firstPokemons));
    window.scroll({ top: 0 });
  };

  return (
    <div className="container mx-auto pt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 justify-items-center">
        {pokemons.map((pokemon: { name: string; url: string }) => {
          const idPokemon = pokemon.url.split("/")[6];
          return (
            <PokemonCard
              id={idPokemon}
              name={pokemon.name}
              url={pokemon.url}
              key={idPokemon}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-5 mb-10">
        {!isLoading && (
          <button
            className="bg-blue-700 text-white rounded-full px-4 py-4 cursor-pointer text-xl hover:bg-blue-900"
            onClick={handleLoadMore}
          >
            Cargar más
          </button>
        )}
        {isLoading && (
          <div>
            <img className="w-20 h-20 " src={eve} alt="loading Eve"></img>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-5 mb-10">
        <button
          className="bg-green-700 text-white rounded-full px-2 py-2 cursor-pointer text-xl hover:bg-green-900"
          onClick={handleColapseItems}
        >
          volver al inicio
        </button>
      </div>
    </div>
  );
};

export default PokeLanding;
