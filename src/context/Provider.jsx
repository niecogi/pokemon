import React, { useState } from 'react'
import Context from './Context.js'

export default function ({ children, value:defaultValue }) {

  const [value, setValue] = useState(defaultValue)

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )

}