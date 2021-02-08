import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    overflow-x: auto;
  }
`

export const CardDetail = styled.div`
  width: 100%;
  padding: 12px;
  background: #fff;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 600px) {
    min-width: 50%;
    :first-child {
      margin-left: 117%;
    }
    min-height: 151px;
  }

  h2 {
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`
