import styled from 'styled-components'

export const Container = styled.div`
  padding: 12px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 1px 1px 8px #000;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4px;

  @media only screen and (max-width: 900px) {
    label {
      font-size: 14px;
    }
  }
`
