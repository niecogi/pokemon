import React from 'react'
import ThemeSwitch from '../ThemeSwitch'
import './Header.css'

export default function Header() {
  const url = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img src={url} alt='Logo PokeAPI'/>
      </div>
      <div className="mode-wrapper">
        <ThemeSwitch/>
      </div>
    </div>
  )
}