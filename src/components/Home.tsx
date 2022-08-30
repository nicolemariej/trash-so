import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'
import fish from '../assets/fish.png'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Home: FC = () => {
  return (
   <div>
    <div className='ml-7'>
 <img src={fish} alt='Fish' className='h-48 my-9' />
 <p className='text-8xl mb-9 mt-9 leading-tight'>Earn Solana for your trash.</p>
 <div className='mt-9'><WalletMultiButton /></div>
   </div>
</div>
  );
};