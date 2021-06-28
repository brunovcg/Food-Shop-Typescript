import {Container} from './styles';
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import { useCart } from '../../Provider/cart';

const SubtotalBox = () => {


   

    const {emptyCart, cart} = useCart()

    const history = useHistory();

    const handleNav = (path: string) => {
        history.push(path)
    }

    const total = cart.reduce((acc, prox)=> acc+prox.price,0)

    return(
        <Container>
           
            <h3>Subtotal</h3>
          
            <p>Preço: <span>R$ {Math.round(total*100)/100}</span></p>
            
            <div className="itens">{`${(cart) ? cart.length : 0} itens`}</div>  
            
            <Button
               onClick={()=> handleNav("/payment")}
               variant="contained"
               color="secondary"
               size="large"
            >
                Pagar
            </Button>

            <div className="esvaziar">
            <Button
                onClick={()=> emptyCart()}
                variant="contained"
                color="default"
                size="small"
                >
                    Esvaziar
                </Button>
            </div>
            
        </Container>
    )
}

export default SubtotalBox
