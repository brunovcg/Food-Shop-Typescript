import CartCard from '../../components/CartCard';
import SubtotalBox from '../../components/Subtotal';
import {CheckoutBox, Container} from './styles';
import {Header} from '../../components/Header'
import {useHistory, Redirect} from 'react-router-dom'
import { useCart } from '../../Provider/cart';
import { useAuth } from '../../Provider/Authentication';




export const Checkout = () => {

    const {authenticated} = useAuth()

    const {cart} = useCart()

    const history = useHistory()

    const handleNav = (path: string)=>{
        return history.push(path)
    }

    if(!authenticated) {
        return <Redirect to={"/"}/>
    }

    return(
        <Container>
            <Header
                buttonTag="back"
                click={()=> handleNav("/dashboard")}
            />
            <CheckoutBox>
                <h2>Carrinho</h2>

                <div className="cartContainer">
                    <div className="productCartList">
                         
                {
                    cart &&
                    cart.map((product)=>(<CartCard key={product.id} product={product} />))

                }   
            
                    </div>
                    <div className="subtotalBox">
                        <SubtotalBox/>
                    </div>
                </div>
            </CheckoutBox>
        </Container>
    )
}