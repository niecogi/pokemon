import './Cards.css'
import Card from '../Card'

export default function Cards({values}) {

  return (
    <div className='cards-wrapper'>
      {
        values.map(pokemon => (
          <li key={pokemon.name} >
            <Card url={pokemon.url}/>
          </li>
        ))
      }
    </div>
  )
}