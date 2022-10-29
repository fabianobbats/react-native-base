import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';


const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider> 
          <Routes />
        </AuthProvider>
      </NavigationContainer>
      <StatusBar/>
    </>
  )
}

export default App;
