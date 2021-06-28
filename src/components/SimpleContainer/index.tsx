import { ReactNode } from 'react'
import {ContainerBox} from './styles'


interface SimpleContainerProps{
    children : ReactNode;
}

const SimpleContainer = ({children}: SimpleContainerProps)=>{

    return(
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}

export default SimpleContainer