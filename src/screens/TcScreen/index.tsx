import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { FullCard } from '../../components/funcionais/FullCard'
import { Row } from '../../components/funcionais/RowComponent'
import { Title } from '../../components/funcionais/TitleComponent'
import { View } from 'react-native'
//@ts-ignore
import profile from '../../assets/perfil.jpg'
import { Space } from '../../components/funcionais/SpaceComponent'
import { Text } from '../../components/funcionais/TextComponent'
import { MessageComponent } from '../../components/MessageComponent'
import { SendMessageComponent } from '../../components/SendMessageComponent'
export const TcScreen = () => {
    return (
        <ContainerComponent style={{ backgroundColor: '#c7c0a6', height: '100%' }}>
            <FullCard style={{ backgroundColor: '#238152' }}>
                <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <Feather name='arrow-left' size={24} color={'white'} />
                        <Image source={profile} style={{ width: 50, height: 50, borderRadius: 30, marginHorizontal: 8 }} />
                        <Title bold style={{ fontSize: 24, color: 'white' }}>Pedro Henrique</Title>
                    </Row>
                    <Row style={{ justifyContent: 'space-around', width: 140 }}>
                        <AntDesign name='camera' color='white' size={24} />
                        <Feather name='phone-call' color='white' size={24} />
                        <SimpleLineIcons name='options-vertical' color='white' size={24} />
                    </Row>
                </Row>
            </FullCard>
            <Space top={2}>
                <FullCard style={{ borderRadius: 8 }}>
                    <Text style={{ color: 'gray', textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque eligendi corrupti sapiente magnam, quisquam fugiat? Dolores ratione animi sint.</Text>
                </FullCard>
            </Space>
            <Space>
                <MessageComponent text='Ola amigo' message={'me'} />
                <MessageComponent text='Vamos no shopping?' message={'me'} />
                <MessageComponent text='Hoje não' message={'you'} />
                <MessageComponent text='To muito ocupado' message={'you'} />
                <MessageComponent text='Que pena, ta bom então p.p' message={'me'} />
            </Space>
            <Space>
                <View style={{ justifyContent: 'flex-end', flex: 1, height: 230 }}>
                    <SendMessageComponent />
                </View>
            </Space>
        </ContainerComponent>
    )
}