import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [dropDown,setDropDown] = useState(false)
  const [menu,setMenu] = useState(false)

  function openMenu(){
    setMenu(true)
  }
  function closeMenu(){
    setMenu(false)
  }

  function openDropDown(){
    setDropDown(true)
  }
  function closeDropDown(){
    setDropDown(false)
  }
  return (
    <>
    {/* TOP BAR  */}
      <div className='w-full h-10 bg-blue-100 hidden items-center p-1 justify-between lg:flex'>
        <div className='flex gap-5 justify-center items-center ml-10'>
          <Link to="/"><img src="" alt="" className='h-5' /></Link>
          <Link to="/"><img src="" alt="" className='h-5' /></Link>
        </div>
        <div className='mr-4'>
          <ul className='flex gap-2 items-center justify-center ml-auto'>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Help</Link></li>
            <li className='text-lg font-thin text-gray-600'>|</li>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Join Us</Link></li>
            <li className='text-lg font-thin text-gray-600'>|</li>
            <li className='text-xs text-gray-600 font-bold'><Link to=''>Sign In</Link></li>
          </ul>
        </div>
      </div>
    {/* NAVIGATION */}
    <div className='flex w-full p-2 justify-between items-center md:hidden'>
      <div><Link to='/home'><img src="src\assets\Logo AI.png" alt="" className='h-6'/></Link></div>
      <div><img src="src\assets\menu icon.png" alt="" className='h-5 'onClick={()=>setMenu(!menu)}/></div>
    </div>
      { menu && <div className='w-full flex justify-evenly p-2 text-xs md:hidden flex-wrap gap-2' >
        <div>
          <ul className='flex flex-col gap-1 '>
            <Link to='/home'><li className='text-base font-semibold '>Home</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-1 '>
            <Link><li className='text-base font-semibold '>Services</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-1 '>
            <Link><li className='text-base font-semibold '>Contact</li></Link>
            <div className='font-light'>
            </div>
          </ul>
        </div>
      </div>
}
    <div className='hidden md:flex p-2 items-center justify-between  min-h-16'>
      <div><Link to='/'><img src="src\assets\Logo AI.png" alt="" className='h-9' /></Link></div>
      <div>
      </div>
      <div>
        <button className=' p-2'><Link target='_blank' to='https://github.com/AliAbdullah0?tab=repositories'><img src="src\assets\github.png" alt="" className='h-7'/></Link></button>
      </div>
    </div>
    </>
  );
}

export default Navigation;
