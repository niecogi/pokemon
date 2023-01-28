import Card from '../Card'
import './Cards.css'

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