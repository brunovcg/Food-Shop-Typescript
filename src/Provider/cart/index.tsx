import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import {useAuth} from '../Authentication'


interface Product {
    id?: number;
    image: string;
    name: string;
    price: number;
}

interface CartProviderProps {
    children: ReactNode;
}

interface CartProviderData {
    newList?: Product[]
    cart: Product[];
    setCart?: (cart: Product[]) => void;
    addProduct: (product: Product) => void;
    removeProduct: (name: string) => void;
    emptyCart: () => void;
}


export const CartContext = createContext<CartProviderData>({} as CartProviderData);


export const CartProvider = ({children} : CartProviderProps) => {

    const [cart, setCart] = useState<Product[]>(() : any => {

       
        const localCart = localStorage.getItem("cart") ? localStorage.getItem("cart") : null;

        if (localCart) {return JSON.parse(localCart)}
    })

    const {authenticated} = useAuth()
           

    useEffect(()=>{
     
        if (authenticated){

            localStorage.setItem("cart", JSON.stringify([]));  
            setCart([])
        }

        
    },[authenticated])

   

    const addProduct = (product: Product) => {

        const checkList = localStorage.getItem("cart") ? localStorage.getItem("cart") : null;

        if (checkList) {
            
        const list = JSON.parse(checkList)

        if (!list.find( (item : Product) =>item.id===product.id)){
            list.push(product);
            localStorage.setItem("cart", JSON.stringify(list));
            setCart(list)
        } else {alert(`Escolha apenas um de cada produto: ${product.name} já foi escolhido`)}
    }

    }


    const removeProduct = (name : string) => {

        const checkList = localStorage.getItem("cart") ? localStorage.getItem("cart") : null;

        if (checkList) {

            const list = JSON.parse(checkList)
        
        const newList = list.filter((item : Product)=> item.name !== name);
        localStorage.setItem("cart", JSON.stringify(newList))
        setCart(newList)
        }
    }

    const emptyCart = () => {
        
        const newList: Product[] = [];
        localStorage.setItem("cart", JSON.stringify(newList))
        setCart(newList)
    }
  

    return(
        <CartContext.Provider
            value={{addProduct, removeProduct, emptyCart, cart}}
        >
            {children}
        </CartContext.Provider>
    )
    }

export const useCart= () => useContext(CartContext);