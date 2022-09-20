// import React from 'react';
// import type { FC, ReactNode } from 'react';

//
//   return (
//     <div className="bg-gray-300 p-7">
//       <img src={props.img} alt="Your NFT" className="h-40" />
//       <div className="flex justify-around mt-8">
//         <div className="text-xl font-semibold"> {props.token}</div>
//         <input type="checkbox" className="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" />
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState, FC } from 'react';
import { resolveIPFS } from './resolveIPFS';
import apiPost from './apiPost';
import axios from 'axios';
import { useMoralisSolanaApi } from 'react-moralis';

export const TokenCard: FC = (nftAddress) => {
  const [nftData, setNftData] = useState({ contractType: '', name: '', metadata: '' });
  const solApi = useMoralisSolanaApi();

  const getNFTMetadata = async () => {
    const options = {
      network: 'mainnet',
      address: '21E6C92xr6nkbyy4MV894ZqmEsrixmLSoampz76pcsCC',
    };
    const metaData = await solApi.nft.getNFTMetadata(options);
    console.log('meta data.....', metaData);
    // const response = await apiPost('./getNFTMetaData', options);
    const result = await axios.get(`${metaData.metaplex.metadataUri}`, {
      headers: {
        'content-type': 'application/json',
      },
    });
    console.log('result data.....', result);

    setNftData({
      contractType: metaData.standard,
      name: metaData.name,
      metadata: result.data,
    });
  };

  useEffect(() => {
    if (nftAddress) {
      getNFTMetadata();
    }
  }, [nftAddress]);

  return (
    <div className="bg-gray-300 p-7">
      <img src={resolveIPFS(nftData?.metadata?.image)} alt="Your NFT" className="h-40" />{' '}
      <div className="flex justify-around mt-8">
        <div className="text-xl font-semibold"> {nftData?.name}</div>
        <input type="checkbox" className="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" />{' '}
      </div>{' '}
    </div>
  );
};
