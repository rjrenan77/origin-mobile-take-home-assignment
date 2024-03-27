/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Routes} from '@routes/index';
import RootContextProvider from '@context/RootContextProvider';

function App(): JSX.Element {
  return (
    <RootContextProvider>
      <Routes />
    </RootContextProvider>
  );
}

export default App;
