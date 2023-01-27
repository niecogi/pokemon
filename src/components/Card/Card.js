import { useState, Fragment } from 'react'
import { getPokemon } from '../../services/getPokemon'
import './Card.css'

export default function Card({ url }) {
  const [data, setData] = useState()
  getPokemon(url).then((res) => {
    console.log(data)
    setData(res)
  })
  return (
    <Fragment>
      {
        data !== undefined
          ? (<article>
            <h4>{data.id}</h4>
            <h4>{data.forms[0].name}</h4>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt={`Photo of ${data.name}`}/>
          </article>)
          : null
      }
    </Fragment>
  )
}