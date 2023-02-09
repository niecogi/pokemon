import { useState } from 'react'
import { getPokemon } from '../services/api'

export default function usePokemon(url) {
  const [pokemon, setPokemon] = useState()
  getPokemon(url).then((res) => {
    setPokemon(res)
  })

  return {
     pokemon
  }
}