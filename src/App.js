import React from 'react'
import './assets/css/App.css'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes/>
      </HashRouter>
    </div>
  )
}
