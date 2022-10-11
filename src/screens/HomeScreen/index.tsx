import React, { useState } from 'react'
import { HeaderHome } from '../../components/HeaderHome'
import { TopTabComponent } from '../../components/TopTabComponent'
//@ts-ignore
import profile from '../../assets/perfil.jpg'
import { TcComponent } from '../../components/TcComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'
import { StatusComponent } from '../../components/StatusComponent'
import { Row } from '../../components/funcionais/RowComponent'
import { Divider } from '../../components/funcionais/Divider'

export const HomeScreen = () => {
    const [focus, setFocus] = useState('conversa')
    return (
        <ContainerComponent>
            <HeaderHome />
            <TopTabComponent focus={focus} setFocus={setFocus} />
            {
                focus === 'conversa' ? (
                    <Space>
                        <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                        <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                        <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                    </Space>
                ) : null
            }
            {
                focus === 'status' ? (
                    <>
                        <Space>
                            <Row top={2}>
                                <StatusComponent photo={profile} name='Meu Status' hour='toque para atualizar seu status' />
                            </Row>
                        </Space>
                        <Divider top={1} bottom={1} />
                        <Space>
                            <StatusComponent photo={profile} name='Nome da pessoa' hour='Há 14 min' />
                            <StatusComponent photo={profile} name='Nome da pessoa' hour='Há 14 min' />
                            <StatusComponent photo={profile} name='Nome da pessoa' hour='Há 14 min' />
                            <StatusComponent photo={profile} name='Nome da pessoa' hour='Há 14 min' />
                        </Space>
                    </>
                ) : null
            }
        </ContainerComponent>
    )
}