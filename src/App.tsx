import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import Wallet from './contexts/Wallet';
import Demo from "./components/demo"
import {Header} from './components/Header'

export const App: FC = () => {
  return (
    <Wallet>
      <Header />
      <Content />
      
    </Wallet>

  );
};

const Content: FC = () => {
  return <div><WalletMultiButton /></div>;
};
