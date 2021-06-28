import {Container} from './styles'
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import { useCart } from '../../Provider/cart';

interface HeaderProps{
    click: () => void;
    buttonTag: string;
   }



export const Header = ({click, buttonTag} : HeaderProps) =>{

    const history = useHistory()

    const handleNav = (path : string)=>{
        return history.push(path)
    }

 
    const {cart} = useCart()

    return(
       <Container>
            <div className="homeButton"> 
                <Button
                    onClick={click}
                    variant="contained"
                    color="secondary"
                    size="medium"
                    >
                        {buttonTag}
                </Button>
            </div>

            <h1>Kenzie Food-Shop</h1>

            <div className="cartButton">
                <Button
                    onClick={()=>handleNav("/checkout")}
                    variant="contained"
                    color="primary"
                    size="medium"
                >
                    Carrinho
                </Button>

                <div>{`${(cart) ? cart.length : 0} itens`}</div>
            </div>
       </Container>
    )
}