import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Text } from '../funcionais/TextComponent'
import { Title } from '../funcionais/TitleComponent'
import { Image, View } from 'react-native'

export const ContactComponent = ({ photo }) => {
    return (
        <Row style={{ alignItems: 'center' }}>
            {photo ? (
                <Image source={photo} style={{ backgroundColor: '#238152', padding: 16, borderRadius: 999, height: 60, width: 60 }} />
            ) : (
                <Ionicons name='person' size={24} color={'white'} style={{ backgroundColor: '#238152', padding: 16, borderRadius: 999 }} />
            )}
            <View style={{ marginLeft: 16 }}>
                <Title style={{ fontSize: 24 }} bold>Novo contato</Title>
                {photo ? (
                    <Text>Lorem ipsum dolor sit amet.</Text>
                ) : null}
            </View>
        </Row>
    )
}