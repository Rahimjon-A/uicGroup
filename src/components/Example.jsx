import React from 'react'
import Navbar from './Navbar'
import Nimadir from '../../public/Nimadir'

const Example = () => {
  return (
    <div className=' relative'>
      <div className=' w-[100px] h-[100px] bottom-0 right-0 absolute bg-transparent '></div>
      <div className='bg-black '>
      <Navbar/>
      </div>
      <Nimadir/>
      </div>
  )
}

export default Example