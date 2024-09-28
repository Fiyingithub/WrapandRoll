import React, { useState } from 'react';
import logo from '../assets/logo2.jpg';
import Menu from '../assets/menu.png';
import CloseMenu from '../assets/cancel.png'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section>
      <div className='bg-[whitesmoke] fixed -mt-20 lg:-mt-10 h-[80px] w-full z-50'>
        <div className='flex items-center justify-between pt-4 px-4 lg:px-24'>
          <div className='flex items-center gap-2'>
            <img className='rounded-[360px] w-12 h-12' src={logo} alt="Logo" />
            <h1 className='text-red-500 flex items-center text-center font-[700] text-2xl md:text-4xl'>
              Wrap <p className='-my-2 text-lg text-black'>&</p><p className='text-yellow-500'>Roll</p>
            </h1>
          </div>

          {/* Mobile Menu Icon */}
          <div className='lg:hidden'>
            <img src={menuOpen ? CloseMenu : Menu} className='w-8 h-8 cursor-pointer' alt="menu" onClick={handleMenuToggle} />
          </div>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center gap-4'>
            <ul className='flex gap-4'>
              <NavLink className='text-xl font-[500] active:text-red-500' to="/">Home</NavLink>
              <NavLink className='text-xl font-[500] active:text-red-500' to="/about">About</NavLink>
              <NavLink className='text-xl font-[500] active:text-red-500' to="/menu">Menu</NavLink>
              <NavLink className='text-xl font-[500] active:text-red-500' to="/contact">Contact</NavLink>
            </ul>
            <div className='flex gap-4 items-center'>
              <button className='w-[150px] h-[40px] bg-yellow-500 hover:text-white text-lg font-[600] rounded-lg'>Login/SignUp</button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className='lg:hidden bg-[whitesmoke] px-4 py-8'>
            <ul className='flex flex-col gap-4'>
              <NavLink className='text-xl font-[500] hover:text-red-500' to="/" onClick={handleMenuToggle}>Home</NavLink>
              <NavLink className='text-xl font-[500] hover:text-red-500' to="/about" onClick={handleMenuToggle}>About</NavLink>
              <NavLink className='text-xl font-[500] hover:text-red-500' to="/menu" onClick={handleMenuToggle}>Menu</NavLink>
              <NavLink className='text-xl font-[500] hover:text-red-500' to="/contact" onClick={handleMenuToggle}>Contact</NavLink>
            </ul>
            <button className='mt-4 w-full h-[40px] bg-yellow-500 hover:text-white text-lg font-[600] rounded-lg'>Login/SignUp</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
