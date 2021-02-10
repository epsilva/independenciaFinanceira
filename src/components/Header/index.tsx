import * as React from 'react'
import { Avatar } from 'react-lorem-ipsum'
import { HeaderContainer } from './styles'
import Pinha from '../../assets/pinha.svg'
import Menu from '../Menu'

const Header = () => (
  <HeaderContainer>
    <Menu />
    <h2>Independência Financeira</h2>
  </HeaderContainer>
)

export default Header
