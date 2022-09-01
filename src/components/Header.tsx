import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const Header: FC = () => {
  return (
    <header>
      <nav className="flex justify-between mt-4">
        <a href="./">
          <img className="h-10 mt-2 ml-2" src={logo} alt="Trash Logo" />
        </a>
        <span className="flex">
          <div className="text-blue-500 mr-5 text-5xl">
            <FaTwitter />
          </div>
          <div className="text-blue-500 mr-20 text-5xl">
            <FaDiscord />
          </div>
          {/* <span className='bg-purple-600 text-white px-9 py-2 rounded-full mr-7'><Content /> */}
          <Content />
          {/* </span> */}
        </span>
      </nav>
    </header>
  );
};

const Content: FC = () => {
  return (
    <div>
      <WalletMultiButton className="font-medium drop-shadow-lg bg-purple-600 hover:bg-purple-600 text-white text-2xl px-7 py-2 rounded-full mr-7 max-w-sm" />
    </div>
  );
};
