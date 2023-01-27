import React, { useEffect, useState } from 'react'
import { getPokemons } from '../../services/getPokemons'
import Cards from '../../components/Cards'

export default function Pokemon() {
  const [data, setData] = useState([])
  useEffect(() => {
   getPokemons().then((res) => {
     console.log(res)
     setData(res)
   })
  }, [])


  return (
    <div>
      <Cards values={data} />
    </div>
  )
}