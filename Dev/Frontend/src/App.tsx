import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import PageContextProvider from './context/PageContext';
import SecondaryHeaderProvider from './context/SecondaryHeaderContext';
import ThemeContextProvider from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { RouterGeneral } from './router/@router';
import { GlobalStyles } from './styles/global';
import darkTheme from './styles/theme/dark';
import lightTheme from './styles/theme/light';
import 'react-toastify/dist/ReactToastify.css';
import MatrixContextProvider from './context/MatrixContext';

function App() {
  const { theme } = useTheme()
  return (
    <div className="App">

      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <PageContextProvider>
          <SecondaryHeaderProvider>
            <ToastContainer theme={theme == 'light' ? 'light' : 'dark'} />
            <MatrixContextProvider>
              <RouterGeneral />
            </MatrixContextProvider>
          </SecondaryHeaderProvider>
        </PageContextProvider>
      </ThemeProvider>
    </div >
  );
}

export default App;
