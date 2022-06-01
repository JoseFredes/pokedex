import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonImage } from "../utils/getPokemonImage";
import { fetchPokemonDetail } from "../utils/fetch/fetchPokemonDetail";
import PokemonDetailCard from "../components/PokemonDetailCard";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setheigth] = useState("");
  const [types, setTypes] = useState([]);
  const [idPokemon, setIdPokemon] = useState("");

  const getPokemonDetail = () => {
    if (id) {
      fetchPokemonDetail(id).then(({ data, status }) => {
        if (status === 200) {
          setName(data.name);
          setExperience(data.base_experience);
          setImage(getPokemonImage(data.id.toString().padStart(3, "0")));
          setWeight(data.weight);
          setheigth(data.height);
          setTypes(data.types.map((i: any) => i.type.name));
          setIdPokemon(data.id);
        }
      });
    }
  };

  useEffect(() => {
    getPokemonDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="mt-2 ml-3">
        <button
          className="bg-gray-700 text-white rounded-full px-4 py-4 cursor-pointer text-xl hover:bg-gray-900"
          onClick={() => navigation(-1)}
        >
          Volver
        </button>
      </div>
      <div>
        <PokemonDetailCard
          name={name}
          image={image}
          experience={experience}
          weight={weight}
          height={height}
          types={types as []}
          id={idPokemon}
        ></PokemonDetailCard>
      </div>
    </div>
  );
};

export default PokemonDetail;
