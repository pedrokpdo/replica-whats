import React from "react";
import { ScrollView, View, Dimensions } from 'react-native'

export const ContainerComponent = ({ children, style = {} }) => {
    const { width, height } = Dimensions.get('window')
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', ...style }}>
            {children}
            <View style={{ height: 16 }} />
        </ScrollView>
    )
}