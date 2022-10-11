import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'
import { View } from 'react-native'

export const SendMessageComponent = () => {
    return (
        <Row style={{ alignItems: 'center' }}>
            <Row style={{ backgroundColor: 'white', padding: 8, borderRadius: 8 }}>
                <Row style={{ alignItems: 'center', width: 300 }}>
                    <Feather name='smile' size={24} color='gray' />
                    <Title style={{ fontSize: 24, color: 'gray', marginLeft: 8 }}>Mensagem</Title>
                </Row>
                <Row style={{ alignItems: 'center' }}>
                    <AntDesign name='paperclip' size={24} color={'gray'} />
                    <MaterialIcons name='attach-money' size={24} color={'gray'} />
                    <Ionicons name='camera' size={24} color={'gray'} />
                </Row>
            </Row>
            <Ionicons name='send' size={24} color='white' style={{ backgroundColor: '#238152', padding: 16, borderRadius: 30, marginLeft: 8 }} />
        </Row>
    )
}