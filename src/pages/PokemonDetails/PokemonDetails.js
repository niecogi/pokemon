import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PokemonDetails.css'
import getPokemonByName from '../../services/getPokemonByName'


export default function PokemonDetails() {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    if(pokemonName !== undefined) {
      getPokemonByName(pokemonName).then((res) =>{
        setPokemon(res)
      })
    }

  }, [pokemonName])

  return (
    <div className="detail-wrapper">
      {
        pokemon !== undefined
          ? <section>
            <article>
              <h4>DETAILS</h4>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={`${pokemon.name}`}/>
              <h4>{pokemon.forms[0].name}</h4>
              {pokemon.stats.map(stat => (
              <div>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
              </div>
              ))
            }
            </article>
          </section>
          : null
      }
    </div>
  )
}