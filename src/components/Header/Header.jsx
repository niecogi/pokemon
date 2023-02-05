import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Header.css'
import ThemeSwitch from '../ThemeSwitch'


export default function Header() {
  const { pokemonName } = useParams()
  const [pokemon, setPokemon] = useState()
  const url = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  useEffect(() => {

  }, [pokemonName])

  return (
    <div className='header-wrapper'>
      <div className='logo-wrapper'>
        <img src={url} />
        <ThemeSwitch />
      </div>
    </div>
  )
}