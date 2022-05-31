import axios from "axios"
const client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const fetchPokemons = async ( offset:number = 0) => {
    const response = await client.get(`pokemon?limit=12&offset=${offset}`);
    return response.data;
}