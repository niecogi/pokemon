import './Card.css'
import { getPokemon } from '../../services/getPokemon'
import { useState } from 'react'

export default function Card({ url }) {
  const [data, setData] = useState()
  getPokemon(url).then((res) => {
    console.log(data)
    setData(res)
  })
  return (
    <article>
      {
        data !== undefined
          ? (<div>
            <h4>{data.id}</h4>
            <h4>{data.forms[0].name}</h4>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}/>

          </div>)
          : null
      }
    </article>
  )
}