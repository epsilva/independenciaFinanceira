import styled from 'styled-components'

export const Container = styled.div`
  padding: 8px 0;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    overflow-x: auto;
  }
`

export const CardDetail = styled.div`
  width: 100%;
  padding: 12px;
  background: #fff;
  margin-right: 8px;
  :last-child {
    margin-right: 0px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0px;
  background: #ffffff;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media only screen and (max-width: 800px) {
    min-width: 50%;
    :first-child {
      /* margin-left: 117%; */
    }
  }

  h2 {
    margin-bottom: 4px;
  }

  @media only screen and (max-width: 800px) {
    p {
      font-size: 14px;
    }
  }
`
