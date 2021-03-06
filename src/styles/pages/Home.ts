import styled from 'styled-components'
import back from '../../assets/wallpaper.jpg'

export const Container = styled.div`
  width: 100%;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  position: relative;
  background: #fff;
  background-repeat: no-repeat;
  background-origin: initial;
  align-items: center;

  .text-left {
    text-align: left;
  }

  h1 {
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.13em;
  }
`

export const DivPage = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2093f7;
  color: #fff;
  text-align: center !important;
  /* margin-top: 20%;
  margin-bottom: 20px; */
`
export const Card = styled.div`
  padding: 20px;
  box-shadow: 0px 10px 13px -7px #000000;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background: #2093f7;
  margin: 4px;
  cursor: pointer;
  width: 20%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  margin-top: 20px;
  :hover {
    background: #6a66f4;
  }

  a {
    text-decoration: none;
  }
  border-radius: 4px;

  h3 {
    color: #fff;
  }
`

export const ContainerIntro = styled.div`
  min-height: 100vh;
  max-width: 100%;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center !important;
  align-items: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  /* flex-direction: column; */

  @media only screen and (max-width: 767px) {
    span {
      font-size: 32px;
    }
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 150% 100%;
    padding: 60px 0 0 0;
  }

  span.descricao {
    font-weight: 600;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 52px;
    @media only screen and (max-width: 767px) {
      font-size: 28px;
    }
  }

  h2 {
    font-weight: 400;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    margin: 0 30%;

    @media only screen and (max-width: 767px) {
      font-size: 20px;
      margin: 0 10%;
    }
  }
`

export const ContainerDesc = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContainerDesc2Column = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardDesc = styled.div`
  text-align: center !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: #2093f7;
  margin: 20px;
  border-radius: 4px;
  padding: 20px;
  color: #fff;

  strong {
    color: #000;
  }

  strong.title {
    font-size: 24px;
    margin-bottom: 8px;
  }
`

export const CardText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`
