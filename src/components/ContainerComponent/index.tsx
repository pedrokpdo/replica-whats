import React from 'react'
import { ScrollView } from 'react-native'


export const ContainerComponent = ({children}) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}