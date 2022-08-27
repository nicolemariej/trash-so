import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'
import { FaTwitter} from 'react-icons/fa';
import { FaDiscord} from 'react-icons/fa';
import Wallet from '../contexts/Wallet';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Header: FC = () => {
  return (
   <header>
    <nav className='flex justify-between mt-3'>
   <img className='h-10 mt-2' src={logo} alt='Trash Logo' />
  <span className='flex'>
<div className='text-blue-500 mr-5 text-5xl'><FaTwitter /></div>
<div className='text-blue-500 mr-20 text-5xl'><FaDiscord /></div>
<span className='bg-purple-600 text-white text-5xl px-9 py-2 rounded-full'><WalletMultiButton />
</span>
  </span>
  </nav>
   </header>

  );
};

// const Content: FC = () => {
//   return <div><WalletMultiButton /></div>;
// };