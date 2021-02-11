import styled, { StyledFunction } from 'styled-components'
import { Styled } from '../types'

export const Container = styled.div`
  width: 100%;
  display: ${(props: Styled) => (props.showModal ? 'flex' : 'none')};
  transition: visibility 0.5s;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  border-radius: 0px;
  padding: 18px;
  background: #ffffff;
  box-shadow: 1px 1px 8px #000;
  min-width: 40%;
  max-width: 40%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    height: 100vh;
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
