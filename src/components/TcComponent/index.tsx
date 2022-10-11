import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { View, Image, Dimensions } from 'react-native'
import { Title } from '../funcionais/TitleComponent'
import { Text } from '../funcionais/TextComponent'
import { AntDesign, Ionicons } from '@expo/vector-icons'

export const TcComponent = ({ photo, message, name, hour }) => {
    return (
        <View style={{}}>
            <Row style={{ alignItems: 'center', paddingVertical: 16, justifyContent: 'space-between' }}>
                <Row style={{ alignItems: 'center', width: '80%' }}>
                    <Image source={photo} style={{ width: 80, height: 80, borderRadius: 100 }} />
                    <View style={{ marginLeft: 8 }}>
                        <Title bold>{name}</Title>
                        <Text>{message}</Text>
                    </View>
                </Row>
                <View style={{ alignItems: 'center' }}>
                    <Text bottom={1}>{hour}</Text>
                    <AntDesign name='filter' size={24} color='gray' />
                </View>
            </Row>
        </View>
    )
}