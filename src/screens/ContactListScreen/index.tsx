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
                <Row top={4}>
                    <ContactComponent name={'Novo Contato'} />
                </Row>
                <Row top={4}>
                    <ContactComponent name={'Novo Grupo'} />
                </Row>
            </Space>
            <Space top={4}>
                <Title style={{ color: 'gray' }}>Contatos no whatsapp</Title>
                <Row top={4}>
                    <ContactComponent name={'Juscelino Kubicheck'} photo={profile} />
                </Row>
                <Row top={4}>
                    <ContactComponent name={'Luis Inacio Lula Da Silva'} photo={profile} />
                </Row>
                <Row top={4}>
                    <ContactComponent name={'Bolsomito Da luz Do Senhor'} photo={profile} />
                </Row>
                <Row top={4}>
                    <ContactComponent name={'LandsCape'} photo={profile} />
                </Row>
            </Space>
        </ContainerComponent>
    )
}