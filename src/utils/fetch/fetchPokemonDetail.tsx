import axios from "axios"
const client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const fetchPokemonDetail = async ( id: string) => {
    const response = await client.get(`pokemon/${id}`);
    const data = response.data;
    const status = response.status;
    return {data, status};
}