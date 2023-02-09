import img from '../../assets/images/404.png'

export default function NotFound(){
  return (
    <div className='notfound-wrapper'>
      <img src={img} alt='404 Not Found'/>
    </div>
  )
}