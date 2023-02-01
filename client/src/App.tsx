import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout />
      </div>
    </ChakraProvider>
  );
}

export default App;
