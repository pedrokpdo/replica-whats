import React from "react";
import { ScrollView, View } from 'react-native'

export const ContainerComponent = ({ children, style={} }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', ...style }}>
            {children}
            <View style={{ height: 16 }} />
        </ScrollView>
    )
}