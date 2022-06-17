import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PageContextProvider from './context/PageContext';
import ThemeContextProvider from './context/ThemeContext';
import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <PageContextProvider>
        <App />
      </PageContextProvider>

    </ThemeContextProvider>

  </React.StrictMode>
);

