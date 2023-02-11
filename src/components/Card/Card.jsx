import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPokemon } from '../../services/api'
import { capitalizeFirstLetter } from '../../services/utils'
import loader from '../../assets/images/loader.svg'
import { PokemonType } from '../../components'
import './Card.css'

export default function Card({ url }) {
  const [data, setData] = useState()
  const navigateTo = useNavigate()

  getPokemon(url).then((res) => {
    setData(res)
  })
  return (
    <div className="card-wrapper"
         onClick={() => navigateTo(`pokemon/${data.forms[0].name}`)}>
      {
        data !== undefined
          ? (
            <article className="card-pokemon">
              <p className="pokemon-id">{`Nº ${data.id}`}</p>
              <p className="pokemon-name">
                {capitalizeFirstLetter(data.forms[0].name)}
              </p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
                alt={`${data.name}`}/>
              <PokemonType data={data} />
            </article>
          )
          : <img src={loader} alt="Loader"/>
      }
    </div>
  )
}