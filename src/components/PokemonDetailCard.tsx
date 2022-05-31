import React from "react";
import "./pokemonDetailCard.css";

type pokemonDetailProps = {
  name: string;
  image: string;
  experience: string;
  weight: string;
  stats: [];
  types: [];
};

function PokemonDetailCard({
  name,
  image,
  experience,
  weight,
  stats,
  types,
}: pokemonDetailProps) {
  return (
    <div className="detail-card">
      <div>
        <img className="detail-image" src={image} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default PokemonDetailCard;
