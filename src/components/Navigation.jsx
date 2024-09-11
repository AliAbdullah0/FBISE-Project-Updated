import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menu, setMenu] = useState(false); // For mobile menu

  return (
    <>
      {/* NAVIGATION */}
      <div className='animate-wiggle '>
        {/* Mobile navigation */}
        <div className='flex w-full p-2 justify-between items-center md:hidden '>
          <div>
            <Link to='/home'>
              <img src="src/assets/Logo AI.png" alt="Logo" className='h-6' />
            </Link>
          </div>
          <div>
            <img 
              src="src/assets/menu icon.png" 
              alt="Menu Icon" 
              className='h-5' 
              onClick={() => setMenu(!menu)} 
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className='w-full flex justify-evenly p-2 text-xs md:hidden flex-wrap gap-2'>
            <div>
              <ul className='flex flex-col gap-1'>
                <Link to='/home'>
                  <li className='text-base font-semibold'>Home</li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-1'>
                <Link to='/services'>
                  <li className='text-base font-semibold'>Services</li>
                </Link>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-1'>
                <Link to='/contact'>
                  <li className='text-base font-semibold'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        )}

        {/* Desktop navigation */}
        <div className='hidden md:flex p-2 items-center justify-between min-h-16 w-[80%] m-auto bg-blue-100 mt-2 rounded-2xl'>
          <div>
            <Link to='/'>
              <img src="src/assets/Logo AI.png" alt="Logo" className='h-9' />
            </Link>
          </div>
          <div className='flex gap-2 items-center w-fit'>
            <ul className='flex gap-4'>
              <Link to='/'>
                <li className='hover:border-blue-600 border-b-2 border-transparent transition duration-150'>Home</li>
              </Link>

              {/* Dropdown Navigation */}
              <div className="relative group">
                <li className="hover:border-blue-600 border-b-2 border-transparent transition duration-150 cursor-pointer">
                  Models
                </li>
                <div className="absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 transform -translate-y-2 shadow-lg tracking-wide bg-blue-50 mt-2">
                  <ul className="flex flex-col p-2  font-light">
                    <li>
                      <Link to="/imagerecognition" className="block  px-4 py-2 hover:bg-blue-100 transition border-transparent hover:border-blue-600 border-b-2">
                        Image Recognition
                      </Link>
                    </li>
                    <li>
                      <Link to="/gpt" className="block px-4 py-2 hover:bg-blue-100 transition border-transparent hover:border-blue-600 border-b-2">
                        Qna Model
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link to='services'>
                <li className='hover:border-blue-600 border-b-2 border-transparent transition duration-150'>About Us</li>
              </Link>
            </ul>
            <div>
              <button className='p-2'>
                <Link target='_blank' to='https://github.com/AliAbdullah0/Source-Code-FBISE-Project'>
                  <img src="src/assets/github.png" alt="GitHub" className='h-7' />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
