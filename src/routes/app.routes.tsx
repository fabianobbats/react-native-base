import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../pages/Home';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name='Home' component={Home}/>
    </AppStack.Navigator>
  );
}

export default AppRoutes;