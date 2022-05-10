import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import ThemeContextProvider from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { RouterGeneral } from './router/@router';
import { GlobalStyles } from './styles/global';
import darkTheme from './styles/theme/dark';
import lightTheme from './styles/theme/light';

function App() {
  const {theme} = useTheme()
  return (
    <div className="App">
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme }>
        <GlobalStyles  />
        <Layout>
          <RouterGeneral />
        </Layout>
      </ThemeProvider>
    </div >
  );
}

export default App;
