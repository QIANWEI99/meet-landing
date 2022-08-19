import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Content from './Content';
import Footer from './Footer';
import "@fontsource/red-hat-display"

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Intro />
      <Content />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
