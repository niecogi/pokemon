import React from 'react'
import './Pagination.css'

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props
  return (
    <div className='pagination'>
      <button
        className='btn-left'
        onClick={onLeftClick}> ◀ </button>
      <p>
        {page} de {totalPages}
      </p>
      <button
        className='btn-right'
        onClick={onRightClick}> ▶ </button>
    </div>
  )
}