import { useCallback, useState } from 'react';
import { ApolloProvider } from '@apollo/client';

import apolloClient from './api';

import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import ThemeWrapper from './components/ThemeWrapper';

import useTheme from './hooks/useTheme';

import './App.css';

function App() {
  const { theme, setTheme } = useTheme();
  const [term, setTerm] = useState('');

  const handleChangeTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <ThemeWrapper theme={theme}>
      <Header
        theme={theme}
        changeTheme={handleChangeTheme}
      />
      <ApolloProvider client={apolloClient}>
        <main>
          <Search
            term={term}
            handleTermChange={setTerm}
          />
          <Table filter={term} />
        </main>
      </ApolloProvider>
      <Footer />
    </ThemeWrapper>
  );
}

export default App;
