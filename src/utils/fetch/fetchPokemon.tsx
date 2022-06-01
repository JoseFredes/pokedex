import axios from "axios"
const client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const fetchPokemons = async ( offset:number = 0, limit: number = 12) => {
    const response = await client.get(`pokemon?limit=${limit}&offset=${offset}`);
    const data = response.data
    const status = response.status
    return {data, status};
}