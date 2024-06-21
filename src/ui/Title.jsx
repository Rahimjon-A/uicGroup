import React from 'react'

const Title = ({desc, title}) => {
  return (
    <div>
      <span className=' text-[--pri] text-[16px] font-semibold block mb-[13px]' >{desc} </span>
      <p className='text-[48px] font-semibold mb-[50px] '>{title} </p>
    </div>
  )
}

export default Title