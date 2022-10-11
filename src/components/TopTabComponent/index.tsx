import React from 'react'
import { View } from 'react-native'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'

export const TopTabComponent = ({focus}) => {
    return (
        <Row style={{ backgroundColor: '#238152', paddingVertical: 0 }}>
            <View style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'conversa' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title bottom={1} style={{ color: 'white' }}>Conversas</Title>
            </View>
            <View style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'status' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title style={{ color: 'white' }}>Status</Title>
            </View>
            <View style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'chamada' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title style={{ color: 'white' }}>Chamada</Title>
            </View>
        </Row>
    )
}