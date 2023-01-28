import './assets/css/App.css';
import Pokemon from './pages/Pokemon'
import Searchbar from './components/Searchbar'
import React from 'react'

export default function App() {
  return (
    <div className="App">
      <h1> Pokemon </h1>
      <Searchbar/>
      <Pokemon/>
    </div>
  )
}
