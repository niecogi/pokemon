import React from 'react'
import { FiList, FiGrid } from 'react-icons/fi'
import './ViewMode.css'

export default function ({ listViewMode, gridViewMode }) {
  return (
    <div className='view-mode-wrapper'>
      <button onClick={listViewMode}>
        <FiList
          className='icon'
          size='1.8em'/>
      </button>

      <button onClick={gridViewMode}>
        <FiGrid
          className='icon'
          size='1.8em'/>
      </button>
    </div>
  )
}
