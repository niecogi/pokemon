import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import getPokemonByName from '../../services/getPokemonByName'
import './PokemonDetails.css'
import { ThemeSwitch } from '../../components'


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
      <div>
        <ThemeSwitch />
      </div>
      {
        pokemon !== undefined
          ?
          <div className="detail-card">
            <div className="detail-card-background">
              <img
                className="detail-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={`${pokemon.name}`}/>
            </div>
            <div className="detail-pokemon-name">
              <h4>{pokemon.forms[0].name}</h4>
            </div>
            <div className="card-types">
              {pokemon.types.map(type => (
                <span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
              ))}
            </div>
            <div className="pokemon-stats">
              {pokemon.stats.map(stat => (
                <div>
                  <p>{stat.stat.name}: {stat.base_stat} </p>
                </div>
              ))
              }
            </div>
          </div>
          : null
      }
    </div>
  )
}