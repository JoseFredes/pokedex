import React from "react";
import { getPokemonImage } from "../utils/getPokemonImage";
import "../index.css";
import pokeball from '../assets/pokeball.png';

type pokemonProps = {
  id: string;
  name: string;
};

const PokemonCard = ({ id, name}: pokemonProps) => {
  const idPokemon = id.toString().padStart(3, "0");
  const pokemonImg = getPokemonImage(idPokemon);

  return (
    <div className="bg-slate-100 h-96 mt-4 mx-3 rounded-md ">
      <div>
        <img className="object-contain hover:animate-pulse border bg-white h-56 w-56 rounded-lg" src={pokemonImg} alt={name} />
      </div>
      <div className="grid justify-items-center text-xm font-bold">
        <h3 className=" pt-5 ">{name}</h3>
        <h3 >#{idPokemon}</h3>
      </div>
      <div className="grid justify-items-center text-xs font-bold">
          <p className="pt-1">Ver más</p>
        <a href={`/${id}`}>
          <button className="flex pt-1" > <img className="hover:rotate-180 h-10 w-10 pointer-events-auto" src={pokeball} alt="pokeball" /></button>
        </a>
      </div>
      </div>
  );
};

export default PokemonCard;
