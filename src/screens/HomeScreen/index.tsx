import React, { useState } from 'react'
import { HeaderHome } from '../../components/HeaderHome'
import { TopTabComponent } from '../../components/TopTabComponent'
//@ts-ignore
import profile from '../../assets/perfil.jpg'
import { TcComponent } from '../../components/TcComponent'
import { Space } from '../../components/funcionais/SpaceComponent'
import { ContainerComponent } from '../../components/funcionais/ContainerComponent'

export const HomeScreen = () => {
    const [focus, setFocus] = useState('conversa')
    return (
        <ContainerComponent>
            <HeaderHome />
            <TopTabComponent focus={focus} setFocus={setFocus} />
            <Space>
                {
                    focus === 'conversa' ? (
                        <>
                            <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                            <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                            <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                        </>
                    ) : null
                }
            </Space>
        </ContainerComponent>
    )
}