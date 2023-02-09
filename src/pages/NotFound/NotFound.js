import { Fragment } from 'react'
import img from '../../assets/images/404.png'

export default function NotFound(){
  return (
    <Fragment>
      <img src={img} alt='404 Not Found'/>
    </Fragment>
  )
}