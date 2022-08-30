import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'
import fish from '../assets/fish.png'
import home from '../assets/home-image.png'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Home: FC = () => {
  return (
   <div className='mx-16 md:ml-7 md:flex'>
    <div className='ml-6 lg:ml-36'>
 <img src={fish} alt='Fish' className='h-20 xl:h-48 my-9 ' />
 <h1 className='text-4xl lg:text-6xl xl:text-8xl mb-14 mt-9 leading-tight'>Earn Solana for your trash.</h1>
 <div className='max-w-xs flex drop-shadow-xl'>
 <Content />
 </div>
   </div>
   <img src={home} alt='App display' className='invisible h-0 md:visible md:h-full max-w-[50%] mt-10' />
</div>

  );
};

const Content: FC = () => {
  return <div className='bg-purple-600 text-white px-9 py-2 rounded-full '><WalletMultiButton /></div>;
};