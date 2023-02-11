import React from 'react'
import './PokemonType.css'

export default function PokemonType({ data }) {
  return <div className="card-types">
    {data.types.map(type => (
      <span key={type.type.name} className={type.type.name}>
							{type.type.name.toUpperCase()}
						</span>
    ))}
  </div>
}