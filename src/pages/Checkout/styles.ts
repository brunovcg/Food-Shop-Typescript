import styled from "styled-components";


export const Container = styled.main`

    width: 95vw;

`

export const CheckoutBox = styled.div`

    h2{
        color: #C84C62;
        font-variant: small-caps;
        font-size: 30px;
        background-color: white;
        width: 200px;
        margin: 20px auto;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        border-radius: 10px;
        text-align: center;
    }

    .cartContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .productCartList{
            display: flex;
            flex-direction: column;
            width: 65%;
        }

        .subtotalBox{
            width: 30%;
            height: 250px;
            display: flex;
            text-align: center;

        }

    }

    @media (max-width: 500px){

        .cartContainer{
            flex-direction: column-reverse;

            .productCartList{
                margin-top: 20px;
                width: 100%;
            }


            .subtotalBox{
                width: 100%;
                height: fit-content;
             }
        }


    }




`