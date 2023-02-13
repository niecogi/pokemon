import React from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import './ScrollerToTop.css'

export default function ScrollerToTop() {
  function onClick() {
    document.querySelector('html').scrollTop = 0
  }

  return (
    <button className='scroller-button' onClick={onClick}>
      <BiArrowToTop size='1.3rem'/>
    </button>
  )
}