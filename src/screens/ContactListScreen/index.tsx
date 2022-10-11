import React from 'react'
import { ContactComponent } from '../../components/ContactComponent'
import { ContainerComponent } from '../../components/ContainerComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Title } from '../../components/funcionais/TitleComponent'
//@ts-ignore
import profile from '../../assets/perfil.jpg'
import { HeaderHome } from '../../components/HeaderHome'

export const ContactListScreen = () => {
    return (
        <ContainerComponent>
            <HeaderHome />
            <Space>
                <Row top={2}>
                    <ContactComponent />
                </Row>
                <Row top={2}>
                    <ContactComponent />
                </Row>
            </Space>
            <Space top={2}>
                <Title style={{ color: 'gray' }}>Contatos no whatsapp</Title>
                <Row top={2}>
                    <ContactComponent photo={profile} />
                </Row>
                <Row top={2}>
                    <ContactComponent photo={profile} />
                </Row>
                <Row top={2}>
                    <ContactComponent photo={profile} />
                </Row>
                <Row top={2}>
                    <ContactComponent photo={profile} />
                </Row>
            </Space>
        </ContainerComponent>
    )
}