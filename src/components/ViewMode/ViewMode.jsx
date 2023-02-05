import React from 'react'
import { FiList, FiGrid } from 'react-icons/fi'
import './ViewMode.css'

export default function ({ listViewMode, gridViewMode }) {
  return (
    <div className='view-mode-wrapper'>
      <button onClick={listViewMode}>
        <FiList/>
      </button>

      <button onClick={gridViewMode}>
        <FiGrid/>
      </button>
    </div>
  )
}
