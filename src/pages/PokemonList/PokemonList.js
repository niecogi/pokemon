import React, { useEffect, useState } from 'react'
import { getPokemons } from '../../services/getPokemons'
import Cards from '../../components/Cards'
import Pagination from '../../components/Pagination'
import Searchbar from '../../components/Searchbar'
import './PokemonList.css'
import Header from '../../components/Header'

export default function PokemonList() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
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

  return (
    <div className="pokemons-wrapper">
      <Header/>
      <Searchbar/>
      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}/>
      <Cards values={data}/>
    </div>
  )
}