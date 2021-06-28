import Button from "@material-ui/core/Button";
import {Link, useHistory, Redirect} from 'react-router-dom';
import {Container} from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import {api} from '../../Services/api'
import { useAuth } from '../../Provider/Authentication';


interface SignUpProps{
    username: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
}

export const SignUp = () => {

    const {authenticated} = useAuth()
   

    const formSchema = yup.object().shape({
        
        username: yup
            .string()
            .required("User is required"),
        email: yup
            .string()
            .email("Invalid E-mail")
            .required("E-mail is required"),
        confirmEmail: yup
            .string()
            .oneOf([yup.ref("email")], "E-mail is not same")
            .email("Invalid E-mail")
            .required("E-mail confirm is required"),            
        password: yup
            .string()
            .min(6)
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Password is not same")
            .required("Password confirm is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpProps>({
        resolver: yupResolver(formSchema)
    });

    const history = useHistory();

    const onSubmitFunction = ({username, email, password}: SignUpProps) => {
        const user = {username, email, password};
        api
        .post("/users/", user)
        .then((_) => {
            alert(`Thank's for subscribing!`)
            return history.push('/login')
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
                <h2>Sign Up</h2>

                <div>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                    <p className="backHome">or go back to our <Link to={"/"}>home</Link></p>
                </div>

                <h1>Kenzie Shop</h1>    
            </div>

            <div className="whiteBox">
                <h3>Please enter you info:</h3>

                <form onSubmit={ handleSubmit(onSubmitFunction) }>
                    <div className="whiteForm">
                        
                            <input
                                placeholder="Set an Username"    
                                {...register("username")}
                                name="username"
                            />
                            <div className={"formError"}>
                                <p>{errors.username?.message}</p>
                            </div>

                            <input
                                placeholder="What's your e-email?"
                                {...register("email")}  
                                name="email"     
                            />
                            <div className={"formError"}>
                                <p>{errors.email?.message}</p>
                            </div>

                            <input
                                placeholder="Please confirm you e-mail"    
                                {...register("confirmEmail")}  
                                name="confirmEmail"             
                            />
                            <div className={"formError"}>
                                <p>{errors.confirmEmail?.message}</p>
                            </div>

                            <input
                                placeholder="Set a password"    
                                {...register("password")}  
                                name="password"
                                type="password"
                            />
                            <div className={"formError"}>
                                <p>{errors.password?.message}</p>
                            </div>

                            <input
                                placeholder="Please confirm password"    
                                {...register("confirmPassword")} 
                                name="confirmPassword"
                                type="password"
                                
                            />
                            <div className={"formError"}>
                                <p>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>  

                        <div className="buttonBox">

                            <Button 
                                color="secondary"
                                variant="contained"
                                type="submit"
                                >Sign Up
                            </Button>
                        </div>
                    </form>
            </div>
        </div>
    </Container>
    )
}