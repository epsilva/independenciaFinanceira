import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  visibility: visible;
  &:hidden {
    visibility: hidden;
    transition-delay: 0, 0.6s;
  }
  transition: visibility 0.5s;
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  align-items: center;
  justify-content: center;
`
