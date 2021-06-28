import styled from 'styled-components'
import back from '../../assets/capa.jpg'

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;


    .transparentBox{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #3a3939e8;
        box-shadow: 0 0 0 20px white;

        .headerBox{
            height: 100%;
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2{
                display: flex;
                align-items: flex-end;
                color: white;
                font-family: sans-serif;
                font-size: 5.5rem;
                height:50%;
            }

            p{
                color: white;
                text-align: center;
                height:20%;
                font-size: 1.5rem;

                a{
                    color: lightblue;
                    text-decoration: none;
                }
            }

            .backHome{        
                font-size: 1rem;

                a{
                    color: yellowgreen;
                } 
            }

            h1{
                text-align: center;
                height:30%;
                display: flex;
                align-items: center;
                color: white;
            }
        }

        .whiteBox{
            height: 100%;
            width: 45%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: white;
            
            h3{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                text-align: center;
                height: 10%;
                font-family: sans-serif;
                color: darkgrey;
                font-size: 2rem;
            }

            form{
                height: 80%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .whiteForm{
                    height: 100%;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;

                    input{
                        height: 40px;    
                        width: 80%;     
                        border: none;
                        border-bottom: 1px #f50057 solid;    
                    }

                    .formError{
                        height: 35px;
                        color: darkred;
                        width: 80%;
                        padding-left: 5px;
                    
                        p{
                            font-size: 0.7rem;
                            text-align: justify;
                            color: red;
                        }       
                    }
                }
            }

            .buttonBox{
                height: 20%;
                display: flex;
                justify-content: center;
                
                button{
                    height: 40px;
                    font-size: 20px;
                    width: 150px;
                }
            }
        }
    }

    @media (max-width:500px){

        .transparentBox{
            flex-direction: column;

            .headerBox{
                width: 100%;
                height: 30%;

                h2{
                    font-size: 3rem;
                    margin: 5px;
                }

                p{
                    margin: 5px;
                    font-size: 1rem;
                }

                .backHome{       
                    
                margin-top: 20px; 
                font-size: 0.8rem;

                a{
                    color: yellowgreen;
                } 
            }
               
                h1{
                    height: 20%;
                    font-size: 1rem;
                }
            }

            .whiteBox{
                width: 100%;
                height: 70%;

                h3{
                    height: 10%;
                    font-size: 1.5rem;
                    margin: 0;
                }

                form{
                    height: 90%;

                    .whiteForm{
                        height: 100%;
                        width: 80%;

                        input{
                            height: 30px;
                            width: 95%;
                        }

                        .formError{
                            height: 25px;
                            margin: 0;
                            width: 95%;
                            p{
                                font-size: 0.8rem;
                                margin: 0;
                            }
                        }   
                    }
                }
            }
        }
    }
`