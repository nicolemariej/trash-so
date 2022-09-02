import React from 'react';
import type { FC, ReactNode } from 'react';
import nft from '../assets/nft.png';

export const TokenCard: FC = (props) => {
  return (
    <div className="bg-gray-300 p-7">
      <img src={props.img} alt="Your NFT" className="h-40" />
      <div className="flex justify-around mt-8">
        <div className="text-xl font-semibold"> Ape #{props.token}</div>
        <input type="checkbox" className="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" />
      </div>
    </div>
  );
};
