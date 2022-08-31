import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png';
import fish from '../assets/fish.png';
import home from '../assets/home-image.png'
import { Cleaning } from './Cleaning';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Routes, Route } from 'react-router-dom'
import { Description } from './Description';

export const Home: FC = () => {
  return (
      <div>
        <div className='mx-16 md:ml-7 md:flex'>
    <div className='ml-6 lg:ml-36'>
 <img src={fish} alt='Fish' className='h-20 xl:h-48 my-9 ' />
 <h1 className='text-4xl lg:text-6xl xl:text-8xl mb-14 mt-9 leading-tight'>Earn Solana for your trash.</h1>
 
 {/* <Route exact path='/cleaning' component={Cleaning} /> */}
 <a href='./cleaner'className=' drop-shadow-md mt-9 rounded-full font-medium bg-blue-500 hover:bg-blue-400 text-white px-9 pt-3 pb-4 text-3xl'>Start Now</a>

   </div>
   <img src={home} alt='App display' className='invisible h-0 md:visible md:h-full max-w-[50%] mt-10' />
</div>
< Description />
</div>

  );
};

