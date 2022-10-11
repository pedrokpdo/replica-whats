import React from 'react'
import { FullCard } from '../funcionais/FullCard'
import { Title } from '../funcionais/TitleComponent'
import { View } from 'react-native'
import { Row } from '../funcionais/RowComponent'
export const MessageComponent = ({ message }) => {
    return (
        <Row style={{ alignSelf: 'start' }}>
            <Title style={{ backgroundColor: message === 'me' ? 'white' : '#238152', padding: 16 }}>iansdinasind</Title>
        </Row>
    )
}