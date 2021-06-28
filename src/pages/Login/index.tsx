import Button from "@material-ui/core/Button";
import {Link, useHistory, Redirect} from 'react-router-dom';
import {Container} from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import {api} from '../../Services/api'
import { useAuth } from '../../Provider/Authentication';

interface LoginProps{
    username: string;
    password: string;
    data: string;
}

export const Login = () => {

    const {authenticated, setAuthenticated} = useAuth()

    const formSchema = yup.object().shape({
        
        username: yup
            .string()
            .required("User is required"),      
        password: yup
            .string()
            .min(6)
            .required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginProps>({
        resolver: yupResolver(formSchema)
    });

    const history = useHistory();

    const addTokenLocalStorage = (data: LoginProps) => {
        localStorage.setItem('@kenzieShop/token', JSON.stringify(data));
    }


    const onSubmitFunction = ({username, password}: LoginProps) => {
        const user = {username, password};
        api
        .post("/sessions/", user)
        .then((response) => {
            addTokenLocalStorage(response.data.access)
            alert(`Welcome ${username}!`)
            setAuthenticated(true)
        
            return history.push('/dashboard')
        })
        .catch((_)=> alert("Something went wrong, try again!"))
    };

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }

    return(
        <Container>
        <div className="transparentBox">

            <div className="headerBox">
                <h2>Login</h2>

                <div>
                    <p>Already have an account? <Link to={"/login"}>Sign Up</Link></p>
                    <p className="backHome">or go back to our <Link to={"/"}>home</Link></p>
                </div>

                <h1>Kenzie Shop</h1>    
            </div>

            <div className="whiteBox">
                <h3>Please enter you info:</h3>

                <form onSubmit={ handleSubmit(onSubmitFunction) }>
                    <div className="whiteForm">
                        
                            <input
                                placeholder="What's your Username"    
                                {...register("username")}
                                name="username"
                            />
                            <div className={"formError"}>
                                <p>{errors.username?.message}</p>
                            </div>
                                                    
                            <input
                                placeholder="What's your password"    
                                {...register("password")}  
                                name="password"
                                type="password"
                            />
                            <div className={"formError"}>
                                <p>{errors.password?.message}</p>
                            </div>

                        </div>  

                        <div className="buttonBox">

                            <Button 
                                color="primary"
                                variant="contained"
                                type="submit"
                                >Login
                            </Button>
                        </div>
                    </form>
            </div>
        </div>
    </Container>
    )
}