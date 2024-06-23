import React from 'react'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PortSection = () => {
  return (
    <div>
      <div className='pt-[100px] bg-[#131314] '>
      <Navbar/>
      <Portfolio/>
      <Footer/>
      </div>
    </div>
  )
}

export default PortSection