import styled from 'styled-components'
import back from '../../assets/undraw_investing.png'

export const Container = styled.div`
  width: 100%;
  flex: 1 1 100%;
  padding: 60px 8px;
  display: flex;
  flex-direction: column;
  /* height: 92vh; */
  position: relative;
  background: #fff;
  /* background-image: url(${back}); */
  background-repeat: no-repeat;
  background-origin: initial;
  transform: scaleX(1);
  align-items: center;

  @media only screen and (max-width: 900px) {
    background-image: none;
    align-items: flex-start;
  }

  h1 {
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.13em;
  }

  /* div {
    margin-left: 80%;
    margin-top: 25%;
    padding: 15px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 900px) {
      margin-top: 25%;
      margin-left: 0%;  
      background: #fff;
    }

    a {
      text-decoration: none;
    }
  } */
`

export const DivPage = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6a66f4;
  color: #fff;
  margin-top: 10%;
`
export const Card = styled.div`
  padding: 20px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000;
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  margin-top: 20px;
  :hover {
    background: #d6d0d0;
  }

  a {
    text-decoration: none;
  }
`
