import { useState, Fragment } from 'react'
import { getPokemon } from '../../services/getPokemon'
import './Card.css'

export default function Card({ url }) {
  const [data, setData] = useState()
  getPokemon(url).then((res) => {
    setData(res)
  })
  return (
    <Fragment>
      {
        data !== undefined
          ? (<article className='card-wrapper'>
            <p className='pokemon-id'>{`Nº ${data.id}`}</p>
            <p className='pokemon-name'>{data.forms[0].name}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt={`${data.name}`}/>
            <div className='card-types'>
              {data.types.map(type => (
                <span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
              ))}
            </div>
          </article>)
          : null
      }
    </Fragment>
  )
}