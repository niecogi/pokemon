import React from 'react'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'
import './Pagination.css'

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props

  return (
    <div className='pagination'>
      <button
        className='btn-left'
        onClick={onLeftClick}> <VscTriangleLeft className='icon' size='1.5rem'/> </button>
      <p>
        {page} of {totalPages}
      </p>
      <button
        className='btn-right'
        onClick={onRightClick}> <VscTriangleRight className='icon' size='1.5rem'/> </button>
    </div>
  )
}