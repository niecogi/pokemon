import { useState } from 'react'

export default function useMode() {
  const [mode, setMode] = useState('grid')
  function listViewMode() {
    setMode('list')
  }

  function gridViewMode() {
    setMode('grid')
  }

  return {
    mode, listViewMode, gridViewMode
  }
}