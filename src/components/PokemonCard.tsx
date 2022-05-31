import React, { useState } from "react";
import { getPokemonImage } from "../utils/getPokemonImage";
import "./pokemonCard.css";

type pokemonProps = {
  id: string;
  name: string;
  url: string;
};

const PokemonCard = ({ id, name, url }: pokemonProps) => {
  const idPokemon = id.toString().padStart(3, "0");
  const pokemonImg = getPokemonImage(idPokemon);

  return (
    <div className="pokemon-card">
      <div>
        <img className="image" src={pokemonImg} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <h3>#{idPokemon}</h3>
      </div>
      <div>
        <a href={`/${id}`}>
          <button className="button-card">Ver más</button>
        </a>
      </div>
    </div>
  );
};

export default PokemonCard;
