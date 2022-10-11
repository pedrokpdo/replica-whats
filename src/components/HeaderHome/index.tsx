import { AntDesign } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Row } from '../funcionais/RowComponent'
import { Title } from '../funcionais/TitleComponent'
export const HeaderHome = () => {
    return (
        <Row style={{ backgroundColor: '#238152', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
            <Title style={{ color: 'white', fontSize: 28 }}>WhatsApp</Title>
            <Row style={{ alignItems: 'center', width: 100, justifyContent: 'space-around' }}>
                <AntDesign name='search1' size={30} color={'white'} />
                <SimpleLineIcons name='options-vertical' color='white' size={24} />
            </Row>
        </Row>
    )
}