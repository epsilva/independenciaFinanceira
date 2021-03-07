import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from 'react-avatar'
import { Container, DivPage, Card } from '../styles/pages/Home'
import { Button } from '@material-ui/core'
import { useAuth } from '../../lib/auth'

interface Parceiro {
  avatar: string
  url: string
  name: string
}

const Home: React.FC = () => {
  const { auth } = useAuth()
  const [parceiro, setParceiro] = useState<Parceiro>()
  useEffect(() => {
    async function load() {
      const { data } = await axios.get('https://api.github.com/users/hugos94')
      setParceiro({
        avatar: data.avatar_url,
        url: data.html_url,
        name: data.name
      })
    }

    if (!auth) {
      window.location.href = '/login'
    } else {
      load()
    }
  }, [])

  return (
    <Container>
      {auth ? (
        <>
          <>
            <h1>Esta página tem como intuíto disponibilizar</h1>
            <h1>algumas ferramentas para ajudar aqueles</h1>
            <h1>que tem interesse em investir</h1>
            <h1>e queiram simular seus investimentos</h1>
          </>

          <Button
            onClick={() => (window.location.href = '/formcalc')}
            variant="contained"
            color="primary"
            style={{
              marginTop: '40px'
            }}
          >
            Entrar
          </Button>

          <DivPage>Parceiros</DivPage>
          <a href="https://tetofii.vercel.app" target="_blank">
            <Avatar
              round
              name={parceiro?.name}
              size="60"
              initials="2"
              src={parceiro?.avatar}
            />
          </a>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => signInWithTwitter()}
          >
            Sign In
          </Button>
        </>
      )}
    </Container>
  )
}

export default Home
