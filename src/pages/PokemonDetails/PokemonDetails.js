import React from 'react'
import './PokemonDetails.css'
import { useParams } from 'react-router-dom'


export default function PokemonDetails({ pokemon }) {
  const { pokemonId } = useParams()
  return (
    <div className="detail-wrapper">
      <section>
        <article>
          <h4>DETAILS</h4>
          <h4>{pokemon.name}</h4>
        </article>
      </section>
    </div>
  )
}