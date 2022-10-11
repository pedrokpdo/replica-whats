import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Text } from '../funcionais/TextComponent'
import { Title } from '../funcionais/TitleComponent'
import { View, Image } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'

export const CallComponent = ({ name, hour, photo, type }) => {
    return (
        <Row style={{ alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between' }}>
            <Row style={{ alignItems: 'center' }}>
                <Image source={photo} style={{ width: 80, height: 80, borderRadius: 40 }} />
                <View style={{ marginLeft: 8 }}>
                    <Title bold>{name}</Title>
                    <Row>
                        {
                            type === 'ok' ? (
                                <Feather name='arrow-up-right' size={24} color={'green'} />
                            ) : (
                                <Feather name='arrow-down-left' size={24} color={'red'} />
                            )
                        }
                        <Text>{hour}</Text>
                    </Row>
                </View>
            </Row>
            <Ionicons name='call' size={24} color={'green'} />
        </Row>
    )
}