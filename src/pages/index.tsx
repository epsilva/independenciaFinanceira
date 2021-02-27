import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from 'react-avatar'
import { Container, DivPage, Card } from '../styles/pages/Home'

interface Parceiro {
  avatar: string
  url: string
  name: string
}

const Home: React.FC = () => {
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

    load()
  }, [])

  return (
    <Container>
      <>
        <h1>Esta página tem como intuíto disponibilizar</h1>
        <h1>algumas ferramentas para ajudar aqueles</h1>
        <h1>que tem interesse em investir</h1>
        <h1>e queiram simular seus </h1>
        <h1 className="destaque">investimentos</h1>
      </>
      <Card>
        <a href="formcalc">Calculadoras</a>
      </Card>
      <DivPage className="footer">Parceiros</DivPage>
      <Card>
        <a href={parceiro?.url} target="_blank">
          <Avatar
            round
            name={parceiro?.name}
            size="60"
            initials="2"
            src={parceiro?.avatar}
          />
        </a>
        <a href="https://tetofii.vercel.app" target="_blank">
          Calculadora de teto FII
        </a>
      </Card>
    </Container>
  )
}

export default Home
