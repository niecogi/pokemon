import React, { useEffect, useState } from 'react'
import { getPokemons } from '../../services/getPokemons'
import { Cards, Pagination, Header, ViewMode, Searchbar } from '../../components'
import './PokemonList.css'
import { useNavigate } from 'react-router-dom'

export default function PokemonList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [mode, setMode] = useState('grid')
  const navigateTo = useNavigate()

  useEffect(() => {
    getPokemons(25, 25 * page).then((res) => {
      setData(res.results)
      setTotal(Math.ceil(res.count / 25))
    })
  }, [page])

  function lastPage() {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
  }

  function nextPage() {
    const nextPage = Math.min(page + 1, total - 1)
    setPage(nextPage)
  }

  function listViewMode() {
    setMode('list')
  }

  function gridViewMode() {
    setMode('grid')
  }
  function onSearch(pokemon) {
    if(pokemon !== null && pokemon.length !== 0){
      navigateTo(`pokemon/${pokemon}`)
    }
  }

  return (
    <div className="pokemons-wrapper" id={mode}>
      <Header/>
      <Searchbar
        onSearch={onSearch}
      />
      <div className='function-wrapper'>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}/>
        <ViewMode
          listViewMode={listViewMode}
          gridViewMode={gridViewMode}
        />
      </div>
      <Cards values={data}/>
    </div>
  )
}