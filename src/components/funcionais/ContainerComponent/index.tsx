import React from "react";
import { ScrollView, View } from 'react-native'

export const ContainerComponent = ({ children }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {children}
            <View style={{ height: 16 }} />
        </ScrollView>
    )
}