import React from 'react'
import Context from './Context.js'

export default function ({ children, value}) {

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  )

}