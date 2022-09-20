import React from 'react';
import type { FC, ReactNode, useMemo } from 'react';
import { TokenCard } from './TokenCard';
import fish from '../assets/fish.png';
import dummy from './data';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useMoralis, useMoralisSolanaApi, useMoralisSolanaCall, useMoralisWeb3Api } from 'react-moralis';
import Moralis from 'moralis-v1/types';

export const Tokens: FC = () => {
  const { publicKey } = useWallet();

  const { account } = useMoralisSolanaApi();
  // get devnet SPL NFT metadata for a given address
  const options = {
    network: 'mainnet',
    address: '21E6C92xr6nkbyy4MV894ZqmEsrixmLSoampz76pcsCC',
  };
  const { nft } = useMoralisSolanaApi();
  const { fetch, data, isLoading } = useMoralisSolanaCall(nft.getNFTMetadata, options);

  if (publicKey) {
    //Todo To display all the images from 5 nfts, get the 5 token ids for 5 NFTs,
    // and store it dummy data and iterate.
    const cards = dummy.map((i) => {
      return <TokenCard key={i} nftAddress={options.address} />;
    });
    return (
      <div>
        <div className="font-bold flex justify-center my-7">
          {console.log(publicKey.toString())}Please select which NFT’s you would like to burn, you can unselect them
          before finalising the burn.
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
