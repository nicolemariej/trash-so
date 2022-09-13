import React from 'react';
import type { FC, ReactNode, useState, useEffect } from 'react';
import { Header } from './Header';
import { Tokens } from './Tokens';
import apiPost from './apiPost';

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

      <div>
        <Tokens />
      </div>
    </div>
  );
};
