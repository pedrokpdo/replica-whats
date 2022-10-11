import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen } from "../screens/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator()

export const AppStack = () => {
    return (
        <Navigator>
            <Screen name='HomeScreen' component={HomeScreen} />
        </Navigator>
    )
}