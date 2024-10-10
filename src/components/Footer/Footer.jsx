import React from 'react';
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
  <footer>
    <div className="container py-20 flex flex-col md:flex-row md:item-center justify-between gap-10">
        {/* brand info */}
      <div className='space-y-4'>
        <img src={ Logo } className='w-40' alt=' ' />
        <p className='text-gray-400 md:max-w-[400px]'>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Eveniet sapiente 
            possimus error, optio nostrum, est iure dolore et .
        </p>
      </div>
      {/* social icons */}
      <div className='flex space-x-6 text-3xl'>
            <FaFacebook className='hover:text-primary duration-200' />
            <FaInstagram className='hover:text-primary duration-200' />
            <FaLinkedin className='hover:text-primary duration-200' />
        </div>
    </div>
  </footer>
  )
}

export default Footer