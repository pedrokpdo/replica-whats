import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { FullCard } from '../../components/funcionais/FullCard'
import { Row } from '../../components/funcionais/RowComponent'
import { Title } from '../../components/funcionais/TitleComponent'
//@ts-ignore
import profile from '../../assets/perfil.jpg'
export const TcScreen = () => {
    return (
        <ContainerComponent>
            <FullCard style={{ backgroundColor: '#238152' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Row style={{ alignItems: 'center' }}>
                        <Feather name='arrow-left' size={24} color={'white'} />
                        <Image source={profile} style={{ width: 50, height: 50, borderRadius: 30, marginHorizontal: 8 }}/>
                        <Title bold style={{ fontSize: 24, color: 'white' }}>Pedro Henrique</Title>
                    </Row>
                    <Row style={{ justifyContent: 'space-around', width: 200 }}>
                        <AntDesign name='camera' color='white' size={24}/>
                        <Feather name='phone-call' color='white' size={24}/>
                        <SimpleLineIcons name='options-vertical' color='white' size={24}/>
                    </Row>
                </Row>
            </FullCard>
        </ContainerComponent>
    )
}