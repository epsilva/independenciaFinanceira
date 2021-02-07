import * as React from 'react'
import { Avatar } from 'react-lorem-ipsum'
import { HeaderContainer } from './styles'
import Pinha from '../../assets/pinha.svg'

const Header = () => (
  <HeaderContainer>
    <h2>Independência Financeira</h2>
    <div className="avatar"></div>
  </HeaderContainer>
)

export default Header
