import { useState } from 'react'
import { getPokemon } from '../../services/getPokemon'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../services/capitalizeFirstLetter'
import './Card.css'

export default function Card({ url }) {
  const [data, setData] = useState()
  const navigateTo = useNavigate()
  getPokemon(url).then((res) => {
    setData(res)
  })
  return (
    <div className="card-wrapper" onClick={() => navigateTo(`pokemon/${data.forms[0].name}`)}>
      {
        data !== undefined
          ? (<article className="card-pokemon">
            <p className="pokemon-id">{`Nº ${data.id}`}</p>
            <p className="pokemon-name">
              {capitalizeFirstLetter(data.forms[0].name)}
            </p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt={`${data.name}`}/>
            <div className="card-types">
              {data.types.map(type => (
                <span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>))}
            </div>
          </article>)
          : null
      }
    </div>
  )
}