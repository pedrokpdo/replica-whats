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
import { CallComponent } from '../../components/CallComponent'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Title } from '../../components/funcionais/TitleComponent'

export const HomeScreen = () => {
    const navigation = useNavigation<any>()
    const [focus, setFocus] = useState('conversa')
    return (
        <View style={{ height: '100%' }}>
            <HeaderHome />
            <TopTabComponent focus={focus} setFocus={setFocus} />
            {
                focus === 'conversa' ? (
                    <Space>
                        <TouchableOpacity onPress={() => { navigation.navigate('TcScreen') }}>
                            <TcComponent photo={profile} name={'Mark Zuttemberg'} hour={'12:20'} message={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                        </TouchableOpacity>
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
            {
                focus === 'chamada' ? (
                    <>
                        <Space>
                            <CallComponent photo={profile} hour='ha 15 min' name='Mark Zuttemberg' type='ok' />
                            <CallComponent photo={profile} hour='ha 15 min' name='Mark Zuttemberg' type='no' />
                        </Space>
                    </>
                ) : null
            }
            <TouchableOpacity onPress={() => { navigation.navigate('ContactListScreen') }} style={{ backgroundColor: '#238152', width: 50, height: 50, position: 'absolute', bottom: 16, right:16, borderRadius: 9999 }}>

            </TouchableOpacity>
        </View>
    )
}