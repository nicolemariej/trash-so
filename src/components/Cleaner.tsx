import React from 'react';
import type { FC, ReactNode } from 'react';
import { Header } from './Header';

export const Cleaner: FC = () => {
  return (
    <div>
      <div className="flex mt-16 justify-center space-x-6">
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-14 py-3 rounded drop-shadow">NFTS</a>
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-12 py-3 rounded drop-shadow">Tokens</a>
        <a className="text-purple-500 text-3xl font-semibold bg-gray-200 px-2 py-3 rounded drop-shadow">
          Unknown Tokens
        </a>
      </div>
      <div className="font-bold flex justify-center my-5">
        Please select which NFT’s you would like to burn, you can unselect them before finalising the burn.
      </div>
    </div>
  );
};
