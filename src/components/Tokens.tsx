import React from 'react';
import type { FC, ReactNode, useMemo } from 'react';
import nft from '../assets/nft.png';
import { TokenCard } from './TokenCard';
import fish from '../assets/fish.png';
import dummy from './data';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useMoralis, useMoralisSolanaApi, useMoralisSolanaCall, useMoralisWeb3Api } from 'react-moralis';

export const Tokens: FC = () => {
  const api = 'HLsfmH5MxvBeZoRo9FaPgTROl4aBIRXORCD36725DQcscog8gd42sIg44Lod5m8B';
  const { publicKey } = useWallet();

  const { account } = useMoralisSolanaApi();
  // get devnet SPL NFT metadata for a given address
  const options = {
    network: 'mainnet',
    address: 'HA17Nu9w2wNoCKVH9PizMbJKvBDmZrPwVkpogWc5oRBz',
  };
  const { nft } = useMoralisSolanaApi();

  const { fetch, data, isLoading } = useMoralisSolanaCall(nft.getNFTMetadata, options);

  if (publicKey) {
    const cards = dummy.map((item) => {
      return <TokenCard img={item.img} token={item.token} />;
    });
    return (
      <div>
        <div className="font-bold flex justify-center my-7">
          {console.log(publicKey.toString())}Please select which NFT’efrwes you would like to burn, you can unselect
          them before finalising the burn. {console.log(nft.toString())}
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
          <WalletMultiButton className="mt-24 font-thin drop-shadow-lg bg-purple-600 hover:bg-purple-600 text-white text-4xl px-12 rounded-full " />
        </div>
      </div>
    );
  }
};
