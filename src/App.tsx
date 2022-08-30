import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import Wallet from './contexts/Wallet';
import {Header} from './components/Header'
import { Home } from './components/Home';
import home from './assets/home-image.png'

export const App: FC = () => {
  return (
    <Wallet>
      <Header />
      <div className='flex'>
      <Home />
      <img src={home} alt='App display' className='h-full max-w-[50%]' />
      </div>
      {/* <Content /> */}
      
    </Wallet>

  );
};

// const Content: FC = () => {
//   return <div><WalletMultiButton /></div>;
// };
