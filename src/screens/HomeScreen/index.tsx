import React from 'react'
import { ContainerComponent } from '../../components/ContainerComponent'
import { HeaderHome } from '../../components/HeaderHome'
import { TopTabComponent } from '../../components/TopTabComponent'

export const HomeScreen = () => {
    return (
        <ContainerComponent>
            <HeaderHome />
            <TopTabComponent focus='status' />
        </ContainerComponent>
    )
}