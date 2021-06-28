import { CartProductBox } from './styles';
import Button from "@material-ui/core/Button";
import { useCart } from '../../Provider/cart';


interface Product{
    id?: number;
    image: string;
    name: string;
    price: number;
}

interface CardCartProps{
    product: Product;
}



const CartCard = ({product}: CardCartProps) => {



    const {removeProduct} = useCart( )

    const {name, image, price} = product;

    return(
        <CartProductBox>
            <figure>
                <img src={image} alt="logo" />
            </figure>
            <div className="namePrice"> 
                <h3>{name}</h3>
                <p>{`R$ ${price}`}</p>
            </div>
            <Button
                onClick={()=>removeProduct(name)}
                variant="contained"
                color="primary"
                size="medium"
            >
                Remover
            </Button>
        </CartProductBox>
    )
}

export default CartCard
