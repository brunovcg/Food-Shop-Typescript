import styled from 'styled-components'


export const CardBox = styled.div`

    background-color: white;
    width: 190px;
    height: 280px;
    padding-top: 10px;
    border-radius: 10px;
    box-shadow: 1px 4px 4px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;

    figure{
        height: 40%;
        margin-top: 10px;

        img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
        }
    }

    h3{
        height: 10%;
        margin: 2px;
    }

    p{
        height: 5%;
        color: #C84C62;
        font-weight: bold;
    }
`