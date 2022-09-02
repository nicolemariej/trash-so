import React from 'react';
import type { FC, ReactNode } from 'react';
import nft from '../assets/nft.png';
import { TokenCard } from './TokenCard';
import fish from '../assets/fish.png';
import dummy from './data';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const Tokens: FC = () => {
  const { connected } = useWallet();
  if (connected) {
    const cards = dummy.map((item) => {
      return <TokenCard img={item.img} token={item.token} />;
    });
    return (
      <div>
        <div className="font-bold flex justify-center my-7">
          Please select which NFT’s you would like to burn, you can unselect them before finalising the burn.
        </div>
        <div className="flex m-16 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
          {cards}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-3xl flex justify-center mt-10 font-semibold">
          Please connect your wallet to continue...
        </div>
        <div className="flex justify-center ">
          <WalletMultiButton className="mt-24 font-thin drop-shadow-lg bg-purple-600 hover:bg-purple-600 text-white text-4xl px-12 py-4 rounded-full " />
        </div>
      </div>
    );
  }
};
