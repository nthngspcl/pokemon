import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const PokemonCard = ({pokemon}) => {
  const [cardImg, setCardImg] = useState([]);

  // const fetchPokemonsInfo = async (pokemon) => {
  //   try {
  //     const { data } = await axios.get(pokemon.url)
  //     setCardImg(data.sprites)
  // }catch(e) {

  // }}
  useEffect(() => {
    axios.get(pokemon.url).then((imgUrl) => setCardImg(imgUrl.data.sprites.other.dream_world.front_default))
  }, [pokemon.url])
  
  return (
    <React.Fragment>
      <Link to={`/pokemon/${pokemon.name}`} className='pokemonCard'>
      <div className='pokemon'>
      <img src={cardImg} alt={pokemon.name} className='pokemonCardImg'/>
      <h3>{pokemon.name}</h3></div>
    </Link>
    </React.Fragment>
  )
}

export default PokemonCard