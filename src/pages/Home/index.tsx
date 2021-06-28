import { useHistory, Redirect} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import {Container} from './styles';
import { useAuth } from '../../Provider/Authentication';




export const Home = () => {

    const history = useHistory()

    const {authenticated} = useAuth()

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }

    const handleGoToSignUp = (path : string ) => {
        return history.push(path )
    }

    const handleGoToLogin = (path : string) => {
        return history.push(path)
    }
    


    return(
        <Container>
        <div className="transparentBox">

    
            <div className="headerBox">
                
                <p>Welcome to</p>
                <h1>Kenzie Shop</h1>
            </div>

            <div className="descriptionBox">   
                <p>Ready to order?</p>
            </div>
        
            <div className="buttonBox">
            
            <Button 
                variant="contained"
                color="secondary"
                size="large" 
                onClick={() => handleGoToSignUp('/signup')}
            >Sign Up</Button>
            
            <Button 
                variant="contained"
                color="primary"
                size="large"
                onClick={() => handleGoToLogin('/login')}
            >Login</Button>

             </div>
        </div>
    
    </Container>
    )
}