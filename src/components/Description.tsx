import type { FC, ReactNode } from 'react';
import React from 'react';
import token from '../assets/token.png'


import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Description: FC = () => {
  return (
   <div className='mt-20 lg:mt-36 ml-9 lg:flex'>
  <img src={token} alt='App preview' className='invisible lg:visible h-0 lg:h-full max-w-[50%] mt-5' />
     <div className='ml-9'>
     <div className=' mb-11 md:ml-9 mr-12 md:mr-6 bg-gray-100 p-7 rounded-lg drop-shadow l:max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
       <div className=' mb-11 md:ml-9 mr-12 md:mr-6 bg-gray-100 p-7 rounded-lg drop-shadow l:max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
       <div className=' mb-11 md:ml-9 mr-12 md:mr-6 bg-gray-100 p-7 rounded-lg drop-shadow l:max-w-[60%]'>
        <h2 className='text-purple-600 text-5xl mb-6 font-medium '>Lorem Ipsum</h2>
    <div className='font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </div>
       </div>
    
     </div>
</div>
  );
};