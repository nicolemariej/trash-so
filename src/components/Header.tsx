import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import logo from '../assets/logo.png'


export const Header: FC = () => {
  return (
   <header>
   <img src={logo} alt="Trash Logo" />
   </header>

  );
};