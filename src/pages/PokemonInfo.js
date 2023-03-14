import React, {useState, useEffect} from 'react'
import {getPokemons,getPokemonsSpecies} from '../api/fetchPokemons'
import {useParams} from 'react-router-dom'
import axios from 'axios';
function PokemonInfo() {
    const [pokemon, setPokemon] = useState();
    const [pokemonSpecies, setPokemonSpecies] = useState();
    const {id} = useParams();
    useEffect(() =>{
        getPokemons(id).then((data) => setPokemon(data));
        console.log(getPokemons(id))
    },[id])
    useEffect(() => {
        getPokemonsSpecies(pokemon).then((data)=> setPokemonSpecies(data));
        console.log(getPokemonsSpecies(pokemon));
    },[pokemon])

    return (
        <div className='pokemonInfo'>
            <div className='mainInfo'>
                <img src={pokemon?.sprites.other.dream_world.front_default} className='imgInfo'/>
                <h3>Name: {pokemon?.name}</h3>
                <div className='stats'>
                    <h4>HP: {pokemon?.stats[0].base_stat}</h4>
                    <h4>ATK: {pokemon?.stats[1].base_stat}</h4>
                    <h4>DEF: {pokemon?.stats[2].base_stat}</h4>
                    <h4>SPC-ATK: {pokemon?.stats[3].base_stat}</h4>
                    <h4>SPC-DEF: {pokemon?.stats[4].base_stat}</h4>
                    <h4>SP: {pokemon?.stats[5].base_stat}</h4>
                </div>
            </div>
            <div className='description'>
                <h3>Description</h3>
                <h4>{pokemonSpecies?.is_legendary}</h4>
                <h4>Rare-Type: <p>{pokemonSpecies?.is_mythical ? 'Mythical': pokemonSpecies?.is_legendary ? 'Legendary' : 'Normal'}</p></h4>
                <h4>Growth rate: <p>{pokemonSpecies?.growth_rate.name}</p></h4>
                <h4>Habitat: <p>{pokemonSpecies?.habitat?.name ? pokemonSpecies?.habitat.name:'None'}</p></h4>
                <p>There is no description yet. So let's attach a synopsis of the series:
                <br></br>The boy Ash goes on a journey with his first Pokemon Pikachu with the goal of becoming the greatest Pokemon Master in the world. Along the way, he is joined by Brock, the girl-turned trainer of stone Pokemon, and the tomboy girl Misty, the trainer of water Pokemon, who seems to like Ash. Friends travel all over the country, participating in various Pokemon competitions. However, on the way they are constantly hindered by Jesse, James and Meowt — a trio of thieves hunting for Pikachu.</p>
            </div>
        </div>
    )
}

export default PokemonInfo