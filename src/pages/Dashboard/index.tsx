import ProductCard from '../../components/ProductCard';
import {ProductBox, Container} from './styles';
import {Header} from '../../components/Header'
import {useHistory, Redirect} from 'react-router-dom'
import { useProducts } from '../../Provider/products';
import { useAuth } from '../../Provider/Authentication';



export const Dashboard = () => {

    const {authenticated, setAuthenticated} = useAuth()

    const {products} = useProducts();

    const history = useHistory()

    const handleNav = (path: string)=>{
        setAuthenticated(false)
        localStorage.clear()
        return history.push(path)
    }



    if(!authenticated) {
        return <Redirect to={"/"}/>
    }



    return(
        <Container>
            <Header
                click={()=>handleNav("/")}
                buttonTag="Logout"
            />
            <ProductBox>
                <h2>Bem vindo e bom apetite!</h2>
                <h4>Cada produto pode ser escolhido uma única vez</h4>

                    <div className="productList">
                    
                        {products.map((product)=>(
                            <ProductCard key={product.id} product={product}/>

                        ))}

                    </div>
            
        </ProductBox>
        </Container>
    )
}