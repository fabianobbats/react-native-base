import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../pages/Login';

const AppStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name='Login' component={Login}/>
    </AppStack.Navigator>
  );
}

export default AuthRoutes;