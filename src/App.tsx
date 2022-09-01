import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import Wallet from './contexts/Wallet';
import { Header } from './components/Header';
import { Home } from './components/Home';
import home from './assets/home-image.png';
import { Description } from './components/Description';
import { Routes, Route } from 'react-router-dom';
import { Cleaner } from './components/Cleaner';

export const App: FC = () => {
  return (
    <Wallet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaner" element={<Cleaner />} />
      </Routes>
    </Wallet>
  );
};

// const Content: FC = () => {
//   return <div><WalletMultiButton /></div>;
// };
