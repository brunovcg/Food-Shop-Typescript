import SimpleContainer from '../../components/SimpleContainer'
import {Link} from 'react-router-dom'

export const NotFound = ()=> {

    return(
        <SimpleContainer>
            <div>
            <h2>Página não encontrada</h2>
            <Link to="/dashboard">Home</Link>
            </div>

        </SimpleContainer>
    )
}