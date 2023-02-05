import React, { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import './assets/css/App.css'
import Provider from './context/Provider'


export default function App() {
  const [theme, setTheme] = useState('light')

  function changeTheme() {
    setTheme(theme => theme === 'light' ? 'dark': 'light')
  }
  return (
    <Provider value={{theme, changeTheme}}>
      <div className="App" id={theme}>
        <HashRouter>
          <Routes/>
        </HashRouter>
      </div>
    </Provider>
  )
}
