import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header border-b  '>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Header