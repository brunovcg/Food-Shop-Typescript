import styled from 'styled-components'

export const CartProductBox = styled.div`

    background-color: white;
    width: 100%;
    max-width: 70vw;
    height: 150px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.3);

    figure{
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;

        img{
            height: 120px;
            width: 120px;
            border-radius: 50%;
        }
    }

    .namePrice{
        width: 50%;
        display: flex;

        h3{
            width: 50%;
            display:flex;
            align-items: center;
            font-size: 1.5rem;
         }

         p{
            width: 50%;
            color: #C84C62;
            font-weight: bold;
            text-align: center;
            display:flex;
            align-items: center;
            font-size: 1.5rem;
        }
    }


  


    @media (max-width: 500px){
        max-width: none;


        figure{
            justify-content: center;
            height: 80%;
            width: 8%;

            img{
                width: 80px;
                height: 80px;
            }
        }

        .namePrice{
            flex-direction: column;
            width: 42%;

            h3{
                height: 50%;
                width: 100%;
                margin:0;
            }

            p{
                height: 50%;
                width: 100%;
                margin:0;
            }
        }

        button{
            width: 75px;
            font-size: 0.8rem;

        }
    }

` 