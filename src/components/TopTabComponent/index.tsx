import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'

export const TopTabComponent = ({focus='conversa', setFocus}) => {
    return (
        <Row style={{ backgroundColor: '#238152', paddingVertical: 0 }}>
            <TouchableOpacity onPress={() => {setFocus('conversa')}} style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'conversa' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title bottom={1} style={{ color: 'white' }}>Conversas</Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFocus('status')}} style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'status' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title style={{ color: 'white' }}>Status</Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setFocus('chamada')}} style={{ flex: 1, alignItems: 'center', borderBottomWidth: focus === 'chamada' ? 2 : 0, borderBottomColor: 'white' }}>
                <Title style={{ color: 'white' }}>Chamada</Title>
            </TouchableOpacity>
        </Row>
    )
}