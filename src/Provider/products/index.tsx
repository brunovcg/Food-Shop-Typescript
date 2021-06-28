import { createContext, useState, useContext, ReactNode } from 'react';
import chopsuey from '../../assets/chopsuey.jpeg';
import conteporanea from '../../assets/conteporanea.jpeg';
import hamburguer from '../../assets/hamburguer.jpeg';
import pasta from '../../assets/pasta.jpeg';
import pizza from '../../assets/pizza.jpeg';
import salada from '../../assets/salada.jpeg';
import sopa from '../../assets/sopa.jpeg';
import sushi from '../../assets/sushi.jpeg';

interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
}

interface ProductProviderProps {
    children: ReactNode;
}

interface ProductProviderData {
    products: Product[];
 
}

export const ProductsContext = createContext<ProductProviderData>({} as ProductProviderData);

export const ProductsProvider = ({children} : ProductProviderProps) => {

   
    const [products] = useState<Product[]>([
        { id: 1, image: chopsuey , name: "ChopSuey", price: 20.59},
        { id: 2, image: conteporanea , name: "Peixe", price: 50.59 },
        { id: 3, image: hamburguer , name: "Hamburguer", price: 32.59 },
        { id: 4, image: pasta , name: "Pasta", price: 42.59 },
        { id: 5, image: pizza , name: "Pizza", price: 50.59 },
        { id: 6, image: salada , name: "Salada", price: 25.59 },
        { id: 7, image: sopa , name: "Sopa", price: 18.59 },
        { id: 8, image: sushi , name: "Sushi", price: 43.59 },
    ])
  

    return(
        <ProductsContext.Provider
            value={{products}}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts= () => useContext(ProductsContext);