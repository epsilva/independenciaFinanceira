import styled, { StyledFunction } from 'styled-components'
import { motion } from 'framer-motion'
import { Styled } from '../types'

export const Container = styled.div``

export const IconPaceHolder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`

export const TextPlaceHolder = styled.div`
  border-radius: 5px;
  width: 100%;
  flex: 1;
  color: #000;
`

export const Li = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  div.outline {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 10px solid white;
    border-radius: 4px;
  }
`

export const Nav = styled(motion.nav)<Styled>`
  position: ${props => (props.openNav ? 'inherit' : 'absolute')};
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;

  ul {
    position: ${props => (props.openNav ? 'absolute' : 'initial')};
    display: ${props => (props.openNav ? 'block' : 'none')};
  }

  .background {
    position: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`

export const Ul = styled(motion.ul)`
  padding: 25px;
  top: 100px;
  width: 100%;
`

export const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`
