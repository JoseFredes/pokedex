

export const getPokemonImage = ( id: string) => {
    const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
    return `${url}${id}.png`;
}