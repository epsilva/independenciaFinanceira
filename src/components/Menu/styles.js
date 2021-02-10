import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  /* 


  

  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  } */
`

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
`

export const Nav = styled(motion.nav)`
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;

  .background {
    position: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    background: #fff;
  }
`

export const Ul = styled(motion.ul)`
  padding: 25px;
  position: absolute;
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
