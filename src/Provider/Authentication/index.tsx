import { createContext, useState, useContext, useEffect, ReactNode } from 'react';



interface AuthProviderProps {
    children: ReactNode;
}

interface AuthProviderData {

    authenticated: boolean;
    setAuthenticated : (auth: boolean) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children} : AuthProviderProps) => {

   
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {

        const token = localStorage.getItem("@kenzieShop/token") ? localStorage.getItem("@kenzieShop/token") : null;

       
        if (token) {return JSON.parse(token)}
        

    }, [authenticated]);



    return(
        <AuthContext.Provider
            value={{authenticated, setAuthenticated}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);