import { CardBox } from './styles';
import Button from "@material-ui/core/Button";
import { useCart } from '../../Provider/cart';

interface Product{
    id?: number;
    image: string;
    name: string;
    price: number;
}

interface CardProductProps{
    product: Product;
}

const ProductCard = ({product} : CardProductProps ) => {

     
    const {name, image, price} = product;

    const {addProduct} = useCart()

    return(
        <CardBox>
            <figure>
                <img src={image} alt="logo" />
            </figure>
            <h3>{name}</h3>
            <p>R$ {price}</p>
            <Button
                onClick={()=>addProduct(product)}
                variant="contained"
                color="primary"
                size="medium"
            >
                Adicionar
            </Button>
        </CardBox>
    )
}

export default ProductCard
