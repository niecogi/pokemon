import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PokemonType, ThemeSwitch } from '../../components'
import { capitalizeFirstLetter } from '../../services/utils'
import getPokemonByName from '../../services/api'
import './PokemonDetails.css'


export default function PokemonDetails() {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState()

  let navigate = useNavigate()

  useEffect(() => {
    if (pokemonName !== undefined) {
      getPokemonByName(pokemonName).then((res) => {
        setPokemon(res)
      })
    }
  }, [pokemonName])

  return (
    <div className="detail-wrapper">
      <div className="button-wrapper">
        <button onClick={() => navigate(-1)}> Back</button>
      </div>
      <div className="mode-wrapper">
        <ThemeSwitch/>
      </div>
      { pokemon !== undefined
          ?
          <div className="detail-card">
            <div className="detail-card-background">
              <img
                className="detail-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={`${pokemon.name}`}/>
            </div>
            <div className="detail-pokemon-name">
              <h2>{capitalizeFirstLetter(pokemon.forms[0].name)}</h2>
            </div>
           <PokemonType data={pokemon}/>
            <div className="pokemon-stats">
              {pokemon.stats.map(stat => (
                <ul key={stat.id}>
                  <li>
                    <p>{`${capitalizeFirstLetter(stat.stat.name.replace('-', ' '))}: ${stat.base_stat}`} </p>
                  </li>
                </ul>
              ))
              }
            </div>
          </div>
          : <p>{`❌ Pokemon with the name: ${pokemonName} not found ❌`}</p>
      }
    </div>
  )
}