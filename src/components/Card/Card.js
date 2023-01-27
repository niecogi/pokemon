import './Card.css'
import { getPokemon } from '../../services/getPokemon'
import { useState } from 'react'

export default function Card({ url }) {
  const [data, setData] = useState()
  getPokemon(url).then((res) => {
    setData(res)
  })
  return (
    <div>
      {
        data !== undefined
          ? (<div>
            <h4>{data.id}</h4>
            <h4>{data.forms[0].name}</h4>
          </div>)
          : null
      }
    </div>
  )
}