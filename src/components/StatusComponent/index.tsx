import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Text } from '../funcionais/TextComponent'
import { Title } from '../funcionais/TitleComponent'
import { View, Image } from 'react-native'

export const StatusComponent = ({ name, hour, photo }) => {
    return (
        <Row style={{ alignItems: 'center', paddingVertical: 16 }}>
            <Image source={photo} style={{ width: 80, height: 80, borderRadius: 40 }}/>
            <View style={{marginLeft: 8}}>
                <Title bold>{name}</Title>
                <Text>{hour}</Text>
            </View>
        </Row>
    )
}