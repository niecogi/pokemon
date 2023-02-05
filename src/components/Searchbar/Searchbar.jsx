import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar() {
  const [input, setInput] = useState()
  const navigateTo = useNavigate()

  return (
    <div className='search-bar'>
      <input className='input-search' value={input}/>
      <button onClick={() => navigateTo()}>Search</button>
    </div>
  )
}