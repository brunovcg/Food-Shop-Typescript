import { ProductsProvider } from "./products";
import { CartProvider } from "./cart";
import { AuthProvider } from "./Authentication";
import { ReactNode } from "react";

interface ProviderProps{
    children: ReactNode;
}



const Providers = ({ children } : ProviderProps) => {
    return (
        <AuthProvider>
            <ProductsProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProductsProvider>
        </AuthProvider>
    
    );
  };
  
  export default Providers;