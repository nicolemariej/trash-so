import React from 'react';
import type { FC, ReactNode } from 'react';
import nft from '../assets/nft.png';
import { TokenCard } from './TokenCard';
import fish from '../assets/fish.png';
import data from './data';

export const Tokens: FC = () => {
  const cards = data.map((item) => {
    return <TokenCard img={item.img} token={item.token} />;
  });
  return (
    <div className="flex  m-16 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
      {cards}
    </div>
  );
};
