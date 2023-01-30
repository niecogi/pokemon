import { Navigate, useRoutes }
  from 'react-router-dom'
import PokemonDetails from './pages/PokemonDetails'
import PokemonList from './pages/PokemonList'

export default function () {
  return useRoutes([{
    path: '*',
    element: <Navigate to="/"/>
  }, {
    path: '/',
    element: <PokemonList/>
  }, {
    path: 'pokemon',
    children: [{
      path: ':pokemonName',
      element: <PokemonDetails/>
    }]
  }])

}