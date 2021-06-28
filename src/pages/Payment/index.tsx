import SimpleContainer from '../../components/SimpleContainer';
import {Link, Redirect} from 'react-router-dom'
import { useAuth } from '../../Provider/Authentication';


const Payment = () => {

    const {authenticated} = useAuth()

    if(!authenticated) {
        return <Redirect to={"/"}/>
    }

    return(
        <SimpleContainer>
                
            <div>
            <h2>Página de pagamento: a ser construida.</h2>
            <Link to="/checkout">GO BACK</Link>
            </div>
        </SimpleContainer>
    )
}

export default Payment