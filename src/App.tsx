import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import Wallet from './contexts/Wallet';
import Demo from "./demo"

export const App: FC = () => {
  return (
    <Wallet>
      <Content />
      <Demo />
    </Wallet>

  );
};

const Content: FC = () => {
  return <div><WalletMultiButton /></div>;
};
