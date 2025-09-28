import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <Footer className="flex md:flow-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t" >
   <div>
    <img src={assets.logo} alt="Logo" className='hidden md:block' />
    <div className='hidden md:block h-7 bg-gray-500/60'></div>
    <p className='py-4 text-center text-xs '></p>
    </div>   
    </Footer>
  )
}

export default Footer