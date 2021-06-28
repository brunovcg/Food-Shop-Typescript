import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 15vh;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.3);

    .homeButton{
        width: 20%;
        display: flex;
        justify-content: center;
    }

    h1 {
        color: #3AA5CD;
        width: 60%;
        font-size: 3rem;
        font-variant: small-caps;
    }

    .cartButton {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 100%;

        div{
            margin-top: 10px;
        }
    }


    @media (max-width: 500px){

        width: 95vw;
        flex-direction: column;
        height: fit-content;
        padding: 10px 0;

        .homeButton{
            width: 30%;
        }

        h1{
            width: 100%;
            height: 100%;
            font-size: 2.5rem;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cartButton {
            width: 100%;

            div{
                margin: 10px 0;
            }
        }


    }    
   

`
    