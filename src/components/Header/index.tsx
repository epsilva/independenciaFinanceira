import React, { useState, useEffect } from 'react'
import Avatar from 'react-avatar'
import { HeaderContainer } from './styles'
import Menu from '../Menu'
import axios from 'axios'

interface User {
  name: string
  url: string
  avatar: string
}

function Header() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function load() {
      const { data } = await axios.get('https://api.github.com/users/epsilva')
      setUser({
        avatar: data.avatar_url,
        url: data.html_url,
        name: data.name
      })
    }

    load()
  }, [])

  return (
    <HeaderContainer>
      <>
        <Menu />
        <h3>Ferramentas do Investidor</h3>
      </>
      <a href={user?.url} target="_blank">
        <Avatar
          size="60"
          name={user?.name || 'Esdras Pinheiro'}
          src={user?.avatar}
          round
          initials="2"
        />
      </a>
    </HeaderContainer>
  )
}

export default Header
