import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonImage } from "../utils/getPokemonImage";
import { fetchPokemonDetail } from "../utils/fetch/fetchPokemonDetail";
import PokemonDetailCard from "../components/PokemonDetailCard";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigation  = useNavigate();
  const [name, setName] = useState("")
  const [experience, setExperience] = useState("")
  const [image, setImage] = useState("")
  const [weight, setWeight] = useState("")
  const [stats, setStats] = useState([])
  const [types, setTypes] = useState([])
  const getPokemonDetail = () => {
      if(id){
        fetchPokemonDetail(id).then(({data, status}) => {
            if(status === 200){
                setName(data.name)
                setExperience(data.base_experience)
                setImage(getPokemonImage(data.id.toString().padStart(3, "0")))
                setWeight(data.weight)
                setStats(data.stats.map((i:any)=> [i.stat.name, i.base_stat]))
                setTypes(data.types.map((i: any)=> i.type.name))
            }
        });
      }
  };

  useEffect(()=>{
    getPokemonDetail();
  }, [id])

  return (
    <div>
       <div >
        <PokemonDetailCard name={name} image={image} experience={experience} weight={weight} stats={stats as []} types={types as []}></PokemonDetailCard>
    </div>
    <div>
      <button onClick={() => navigation(-1)}> Home</button>
    </div>
    </div>
  );
};

export default PokemonDetail;
