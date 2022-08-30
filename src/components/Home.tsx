import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'
import fish from '../assets/fish.png'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Home: FC = () => {
  return (
   <div>
    <div className='ml-36'>
 <img src={fish} alt='Fish' className='h-48 my-9' />
 <p className='text-8xl mb-14 mt-9 leading-tight'>Earn Solana for your trash.</p>
 <div className='max-w-xs flex drop-shadow-xl'>
 <Content />
 </div>
   </div>
</div>
  );
};

const Content: FC = () => {
  return <div className='bg-purple-600 text-white px-9 py-2 rounded-full '><WalletMultiButton /></div>;
};