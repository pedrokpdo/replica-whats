import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { HomeScreen } from "../screens/HomeScreen";
import { HomeStack } from "./home.stack";

const { Navigator, Screen } = createNativeStackNavigator()

export const AppStack = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='HomeStack' component={HomeStack} />
        </Navigator>
    )
}