import type { FC, ReactNode } from 'react';
import React from 'react';
import token from '../assets/token.png'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Description: FC = () => {
  return (
   <div className='mt-36 flex'>
  <img src={token} alt='App preview' className='h-full max-w-[50%] mt-5' />
     <div>
       <div className=' mb-11 ml-9 mr-6 bg-gray-100 p-7 rounded-lg drop-shadow max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
       <div className=' mb-11 ml-9 mr-6 bg-gray-100 p-7 rounded-lg drop-shadow max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
       <div className=' mb-11 ml-9 mr-6 bg-gray-100 p-7 rounded-lg drop-shadow max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
     </div>
</div>
  );
};