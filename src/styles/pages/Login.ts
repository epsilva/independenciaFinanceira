import styled from 'styled-components'
import PinhasBk from '../../assets/pinhasSavonBk.jpeg';

export const Container = styled.div`
    width: 100%;
    flex: 1 1 100%;
    padding: 45px 8px;
    display: flex;
    height: 99vh;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${PinhasBk}) no-repeat;
    background-color: #e9ebdf;

    .card-login {
        background: white;
        border-radius: 14px;
        width: 150px;
        height: 150px;
    }

    .imagem {
        display: none;
        svg {
            fill: #FFF;
            width: 100%;
            height: 50%;
        }
    }
`
