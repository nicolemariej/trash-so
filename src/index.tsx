import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <BrowserRouter>
    <MoralisProvider
      serverUrl="https://a6xyqqo4hpy0.usemoralis.com:2053/server"
      appId="ZdHzvhari1ff954lOq6lpTruUGnnEodJXmL1cebI"
    >
      <App />
    </MoralisProvider>
  </BrowserRouter>,
  document.getElementById('app')
);
