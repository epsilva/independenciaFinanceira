import styled from 'styled-components'
import LoginPc from '../../assets/loginpc.png'

export const Container = styled.div`
  width: 100%;
  flex: 1 1 100%;
  padding: 45px 8px;
  display: flex;
  height: 85vh;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: url(${LoginPc}) no-repeat;
  background-position: 0px 20px;

  @media only screen and (max-width: 1400px) {
    background-size: 70% 70%;
  }

  @media only screen and (min-width: 900px) {
    background-size: 60% 100%;
  }

  @media only screen and (max-width: 400px) {
    background-size: 100% 40%;
  }

  .card-login {
    background: #e6e6e6;
    width: 80%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media only screen and (max-width: 1200px) {
      min-width: 40%;
      height: 100vh;
    }

    @media only screen and (max-width: 600px) {
      min-width: 100%;
      height: 100vh;
      background: transparent;
    }

    @media only screen and (max-width: 400px) {
      padding-top: 70%;
    }

    .cotainer-button {
      display: flex;
      flex-direction: column;

      button {
        text-transform: inherit;
      }
    }

    .social-login-button {
      border-radius: 16px;
      background: #fff;
      .google {
        height: 25px;
      }

      .facebook {
        width: 100%;
        height: 25px;
      }
    }
  }
`
