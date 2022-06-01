import React from "react";
import "../index.css";
import DonutChart from 'react-donut-chart';

type pokemonDetailProps = {
  name: string;
  image: string;
  experience: string;
  weight: string;
  height: string;
  stats: [];
  types: [];
  id: string;
};



function PokemonDetailCard({
  name,
  image,
  experience,
  weight,
  height,
  stats,
  types,
  id,
}: pokemonDetailProps) {
  // const labelStats: [] = stats.map((stats) => stats[0]);
  // const valuesStats: [] = stats.map((stats) => stats[1]);

  // const data = {
  //   labels: labelStats,
  //   data: valuesStats
  // }
  return (
    <div className="bg-gray-200 m-6 h-80 rounded-xl">
      <h1 className="flex font-bold justify-center text-2xl pt-4">
        {name} #{id}{" "}
      </h1>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg items-center m-4">
          <img className="h-60 w-60 rounded-lg" src={image} alt={name} />
        </div>
        <div className="flex flex-col justify-between p-4 bg-cyan-500 rounded-xl h-32 w-72 mt-4">
          <div>
            <div className=" text-white pt-4 pb-4 ml-3 font-mono">
              <ul>
                <li>
                  <p>
                    <strong>Peso: </strong>
                    {weight} Lbs
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Altura: </strong>
                    {height} ft
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Experiencia base: </strong>
                    {experience} pts
                  </p>
                </li>
              </ul>
            </div>
            <div className="inline-flex m-4 gap-2">
              {types.map((type, index) => (
                <div key={index}>
                  <span
                    className={` inline-block ${type} text-white rounded-lg p-3 font-mono`}
                  >
                    {type}
                  </span>
                </div>
              ))}
            </div>
            {/* <div>
              <DonutChart data={data}></DonutChart>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailCard;
