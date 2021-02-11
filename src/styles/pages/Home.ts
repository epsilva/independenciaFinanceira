import styled from 'styled-components'
import back from '../../assets/undraw_investing.png'

export const Container = styled.div`
  width: 100%;
  flex: 1 1 100%;
  padding: 60px 8px;
  display: flex;
  flex-direction: column;
  height: 92vh;
  position: relative;
  background: #fff;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-origin: initial;
  transform: scaleX(1);

  h1 {
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.13em;
  }

  div {
    margin-left: 80%;
    margin-top: 25%;
    padding: 15px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;

    a {
        text-decoration: none
    }
  }
`
