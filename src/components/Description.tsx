import type { FC, ReactNode } from 'react';
import React from 'react';
import token from '../assets/token.png'


import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Description: FC = () => {
  return (
   <div className='mt-20 lg:mt-36  ml-9 xl:flex xl:mt-40'>
  <img src={token} alt='App preview' className='invisible xl:visible h-0 xl:h-full max-w-[50%] mt-5' />
     <div className='ml-9 xl:mt-20 xl:flexbox'>
     <div className=' mb-11 md:ml-0 md:mr-12 mr-12 md:mr-6 bg-gray-100 p-10 rounded-lg drop-shadow'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Burn your trash</h2>
    <div className='font-medium text-xl'>
    If a worthless NFT or token has been sent to your wallet address, you can get SOL by burning them! All you have to do is connect your wallet, select the items you wish to burn and claim your rewards. Just ensure you're burning your trashy tokens and not any valuable tokens!
       </div>
       </div>
       <div className=' mb-11 md:ml-0 md:mr-12 mr-12 md:mr-6 bg-gray-100 p-10 rounded-lg drop-shadow'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>How it works</h2>
    <div className='font-medium text-xl'>
    Solana charges a small amount of fees for maintenance storage. This is known as "rent". The token account is closed when a token is burned, and the rent can be reclaimed.</div>
       </div>
       <div className=' mb-11 md:ml-0 md:mr-12 mr-12 md:mr-6 bg-gray-100 p-10 rounded-lg drop-shadow'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Claim higher rewards</h2>
    <div className='font-medium text-xl'>
    Trash.so offers the highest rewards on the Solana Blockchain. You can claim up to 8x the amount with us than you can with any in-wallet application. Don't believe us? Try it out for yourself!
       </div>
       </div>
    
     </div>
</div>
  );
};