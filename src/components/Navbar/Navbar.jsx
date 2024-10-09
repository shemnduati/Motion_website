import React from 'react'
import Logo from '../../assets/logo.png'
const Navbar = () => {
  return (
   <header>
    <div className="container py-3 flex items-center justify-between">
        {/* logo secction */}
        <div>
           <img src={Logo} alt='logo' className='w-40' />
        </div>
        {/* Navlinks section  */}
        <ul className='hidden md:flex items-center gap-5'>
            <li><a href="#">Products</a></li>
        </ul>
        <ul>
            <li><a href="#">Customer Stories</a></li>
        </ul>
        <ul>
            <li><a href="#">About</a></li>
        </ul>
        <ul>
            <li><a href="#">Blogs</a></li>
        </ul>
        {/* Button section */}
        <div>
            <button className='border border-gray-400 px-4 py-2 rounded-lg
            hover:bg-primary hover:text-white transform duration-300'>Get in touch</button>
        </div>
    </div>
   </header>
  )
}

export default Navbar