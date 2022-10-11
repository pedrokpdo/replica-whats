import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ContactListScreen } from '../screens/ContactListScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { TcScreen } from '../screens/TcScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export const HomeStack = () => {
    
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeScreen' component={HomeScreen} />
            <Screen name='TcScreen' component={TcScreen} />
            <Screen name='ContactListScreen' component={ContactListScreen} />
        </Navigator>
    )
}