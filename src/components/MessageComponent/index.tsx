import React from 'react'
import { FullCard } from '../funcionais/FullCard'
import { Title } from '../funcionais/TitleComponent'
import { View } from 'react-native'
import { Row } from '../funcionais/RowComponent'
export const MessageComponent = ({ message, text }) => {
    return (
        <Row top={1} bottom={1} style={{ alignSelf: message === 'me' ? 'flex-start' : 'flex-end' }}>
            <Title style={{ backgroundColor: message === 'me' ? 'white' : '#44be81', padding: 16, borderRadius: 8, color: message === 'me' ? 'black' : 'white' }}>{text}</Title>
        </Row>
    )
}