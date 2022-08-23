import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import Wallet from './contexts/Wallet';

export const App: FC = () => {
  return (
    <Wallet>
      <Content />
    </Wallet>
  );
};

const Content: FC = () => {
  return <WalletMultiButton />;
};
