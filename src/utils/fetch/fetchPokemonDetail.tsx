import axios from "axios"

export const fetchPokemonDetail = async ( url: string) => {
    const response = await axios.get(url);
    return response.data;
}