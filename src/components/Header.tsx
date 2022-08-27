import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'
import { FaTwitter} from 'react-icons/fa';
import { FaDiscord} from 'react-icons/fa';


export const Header: FC = () => {
  return (
   <header>
    <nav className='flex justify-between mt-3'>
   <img className='h-10 mt-2' src={logo} alt='Trash Logo' />
  <span className='flex'>
<div className='text-blue-500 mr-5 text-5xl'><FaTwitter /></div>
<div className='text-blue-500 mr-20 text-5xl'><FaDiscord /></div>
<span className='bg-black text-white px-9 py-2 rounded-full'> HA17..ORBZ</span>
  </span>
  </nav>
   </header>

  );
};