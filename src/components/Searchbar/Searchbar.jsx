import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

export default function Searchbar({ onSearch } ) {
  const [search, setSearch] = useState('')
  const navigateTo = useNavigate()

  function onClick() {
    onSearch(search, navigateTo)
  }

  function onChange(e) {
    setSearch(e.target.value)
    if (e.target.value.length === 0) {
      onSearch(null)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onClick()
    }
  }

  return (
    <div className="search-bar">
      <input
        className="input-search"
        onChange={onChange}
        onKeyDown={handleKeyDown}

      />
      <button onClick={onClick}>
        Search
      </button>
    </div>
  )
}