import React from 'react'
import { BsTriangleFill } from 'react-icons/bs'
import './ScrollerToTop.css'

export default function ScrollerToTop() {
  function onClick() {
    document.querySelector('html').scrollTop = 0
  }

  return (
    <button className='scroller-button' onClick={onClick}>
      <BsTriangleFill size='1.3rem'/>
    </button>

  )
}