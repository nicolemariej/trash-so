import React from 'react';
import type { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Tokens } from './Tokens';

export const Cleaner: FC = () => {
  return (
    <div>
      <div className="flex mt-16 justify-center space-x-8">
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-24 py-3 rounded drop-shadow">NFTS</a>
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-20 py-3 rounded drop-shadow">Tokens</a>
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-5 py-3 rounded drop-shadow">
          Unknown Tokens
        </a>
      </div>
      <div className="font-bold flex justify-center my-7">
        Please select which NFT’s you would like to burn, you can unselect them before finalising the burn.
      </div>
      <div>
        <Tokens />
      </div>
    </div>
  );
};
