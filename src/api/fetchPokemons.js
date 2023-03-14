import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(limit , offset) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon?limit=${limit}&offset=${offset}`)
        return data
    }catch(e) {

    }
}
export const getPokemons = async(id) =>{
    try {
        const { data } = await axios.get(baseURL + `pokemon/${id}`)
        return data
    }catch(e) {}
}
export const getPokemonsSpecies = async(pokemon) =>{
    try {
        const { data } = await axios.get(pokemon.species.url)
        return data
    }catch(e) {}
}