import { Feather, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'
import { View } from 'react-native'

export const SendMessageComponent = () => {
    return (
        <Row>
            <Row style={{ backgroundColor: 'white' }}>
                <Row>
                    <Feather name='smile' size={24} color='gray'/>
                    <Title>Mensagem</Title>
                </Row>
                <Row>
                    <Ionicons name='add' size={24} color={'gray'}/>
                    <Ionicons name='add' size={24} color={'gray'}/>
                    <Ionicons name='add' size={24} color={'gray'}/>
                </Row>
            </Row>
            <View>
                <Ionicons />
            </View>
        </Row>
    )
}