import { useEffect, useState } from 'react'
import { getPokemons } from '../services/api'

export default function usePokemons() {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    getPokemons(25, 25 * page).then((res) => {
      setData(res.results?.map(pokemon => ({
        name: pokemon.name,
        url: pokemon.url
      })))
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

  return {
    data, total, page, lastPage, nextPage
  }
}