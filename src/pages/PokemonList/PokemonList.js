import React from 'react'
import { Cards, Pagination, Header, ViewMode, Searchbar, ScrollerToTop }
  from '../../components'
import { usePokemons, useMode } from '../../hooks'
import onSearch from '../../services/utils'
import './PokemonList.css'

export default function PokemonList() {
  const { data, total, page, lastPage, nextPage } = usePokemons()
  const { mode, listViewMode, gridViewMode } = useMode()

  return (
    <div className="pokemons-wrapper" id={mode}>
      <Header/>
      <Searchbar
        onSearch={onSearch}
      />
      <div className="function-wrapper">
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
      <div className='scroller-wrapper'>
        <ScrollerToTop />
      </div>
      <Cards values={data}/>
    </div>
  )
}