import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PokemonType, ThemeSwitch } from '../../components'
import { capitalizeFirstLetter } from '../../services/utils'
import getPokemonByName from '../../services/api'
import { RiHeart3Fill, RiShieldFill, RiShieldStarFill, RiSwordFill } from 'react-icons/ri'
import { IoSpeedometer } from 'react-icons/io5'
import { GiBroadsword } from 'react-icons/gi'
import './PokemonDetails.css'


export default function PokemonDetails() {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState()

  const icons = {
    hp: <RiHeart3Fill/>,
    attack: <GiBroadsword/>,
    defense: <RiShieldFill/>,
    'special-defense': <RiShieldStarFill/>,
    'special-attack': <RiSwordFill/>,
    speed: <IoSpeedometer/>
  }

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
      {pokemon !== undefined
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
                  <p> {icons[stat.stat.name]} {` ${stat.base_stat} ${capitalizeFirstLetter(stat.stat.name.replace('-', ' '))}`} </p>
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