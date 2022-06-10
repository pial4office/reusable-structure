import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { LoaderContext } from './contexts/LoaderContext';
import GlobalContextProvider from './contexts/GlobalContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
