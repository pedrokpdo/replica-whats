import React from 'react'
import { View } from 'react-native'

export const HeaderComponent = ({ children }) => {
    return (
        <View>
            <View>
                {children}
            </View>
            <View>
                
            </View>
        </View>
    )
}