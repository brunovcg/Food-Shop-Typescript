import styled from 'styled-components'
import back from '../../assets/capa.jpg'


export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;

    .transparentBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        background-color: #3a3939e8;

        .headerBox{

            height: 30%;
            display: flex;
            align-items: center;

            img{
                width: 11rem;
                height: 11rem;  
            }

            p{
                color: lightblue;
                font-size: 20px;
            }

            h1{
                display: flex;
                font-size: 7rem;
                align-items: center;
                margin-top: 20px;
                color: whitesmoke;
            }
        }

        .descriptionBox{
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
           
            p{
                font-family: sans-serif;
                color: white;
                font-size: 3rem;
                text-align: center;
                width: 70%;
            }
        }

        .buttonBox{
            width:100%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;

            button{
                width: 150px;

                :first-child{
                    margin-right: 10px;
                }
            }

          
        }

    }

    @media (max-width: 500px){

        .transparentBox{
            .headerBox{

                img{
                    width: 8rem;
                    height: 8rem;
                }

                p{
                    font-size: 1.1rem;
                    width: 45%;
                    text-align: center ;
                }

                h1{
                    font-size: 3rem;
                    width: 55%;
                }
            }

            .descriptionBox{
            p{
                font-size: 2.5rem;
            }
        }

        }

        
    }

`
    