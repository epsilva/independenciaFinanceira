import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    height: 100vh;
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
  }
  .inpt-error {
      border: 2px solid red;
  }

  .money:before {
    content: 'R$';
    position: absolute;
    top: 0;
    left: 40px;
    z-index: 1;
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
