import React from 'react'
import './Pagination.css'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props
  return (
    <div className='pagination'>
      <button
        className='btn-left'
        onClick={onLeftClick}> <BiLeftArrow className='icon' size='1.5rem'/> </button>
      <p>
        {page} de {totalPages}
      </p>
      <button
        className='btn-right'
        onClick={onRightClick}> <BiRightArrow className='icon' size='1.5rem'/> </button>
    </div>
  )
}