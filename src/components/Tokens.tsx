import React from 'react';
import type { FC, ReactNode } from 'react';
import nft from '../assets/nft.png';
import { TokenCard } from './TokenCard';

export const Tokens: FC = () => {
  return (
    <div className="flex space space-x-5 m-16 justify-center ">
      <TokenCard img={nft} token={'2039'} />
    </div>
  );
};
