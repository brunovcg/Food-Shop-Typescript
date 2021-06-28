import styled from "styled-components";


export const Container = styled.main`
    width: 95vw;


`


export const ProductBox = styled.div`

    h2{
        color: #C84C62;
        font-variant: small-caps;
        font-size: 30px;
        background-color: white;
        width: 400px;
        margin: 20px auto 10px auto;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        border-radius: 10px;
        padding: 5px;
        text-align: center;
    }
    
    h4{
        color: #32630A;
        background-color: white;
        box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
        width: 350px;
        margin: 10px auto;
        border-radius: 10px;
        font-size: 12px;
        padding: 10px;
        text-align: center;

    }

    .productList{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;  
        width: 100%;
        margin: 0 auto;

        div{
            margin: 10px;
        }
    }

    @media (max-width: 500px){

        width: 95vw;

        h2{
            width: 95%;
        }

        h4{
            width: 80%;
        }

        .productList{
            width: 100vw;
            justify-content: center;
        }



    }
`