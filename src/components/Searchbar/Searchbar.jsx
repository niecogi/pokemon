import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar({ onSearch } ) {
  const [search, setSearch] = useState('')
  const navigateTo = useNavigate()

  function handleSubmit() {
    onSearch(search.toLowerCase(), navigateTo)
  }

  function handleChange(e) {
    setSearch(e.target.value)
    if (e.target.value.length === 0) {
      onSearch(null)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type='text'
        name='query'
        placeholder='charmander'
        className="input-search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}/>
      <button type='submit'>
        Search
      </button>
    </form>
  )
}