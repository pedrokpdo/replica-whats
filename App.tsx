import React from 'react';
import { AppStack } from './src/stacks/app.stack';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor='green'/>
      <AppStack />
    </NavigationContainer>
  );
}

