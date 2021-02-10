import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    height: 100vh;
    padding-top: 60px;
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    background: #fff;
  }
  .inpt-error {
      border: 2px solid red;
  }

  p {
    color: #000;
    text-align: center;
  }

#root {
    display: flex;
    justify-content: center;
  }

  .sp-error {
    color: red;
  }
`
