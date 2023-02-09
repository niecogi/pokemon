import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes'
import Provider from './context/Provider'
import { NotFound, PokemonDetails, PokemonList } from './pages'
import './assets/css/App.css'


export default function App() {
  const [theme, setTheme] = useState('light')

  function changeTheme() {
    setTheme(theme => theme === 'light' ? 'dark': 'light')
  }
  return (
    <Provider value={{theme, changeTheme}}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PokemonList/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='pokemon/:pokemonName' element={<PokemonDetails/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}
