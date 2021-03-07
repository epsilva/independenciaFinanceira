import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from 'react-avatar'
import {
  Container,
  DivPage,
  Card,
  ContainerIntro,
  ContainerDesc,
  CardDesc
} from '../styles/pages/Home'
import { Button } from '@material-ui/core'
import Link from 'next/link'

interface Parceiro {
  avatar: string
  url: string
  name: string
}

const Home: React.FC = () => {
  const [parceiro, setParceiro] = useState<Parceiro>()
  useEffect(() => {
    document.getElementById('header').style.background = 'transparent'
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

  function scrollFunction() {
    console.log(document.getElementById('main').scrollTop)
    if (document.getElementById('main').scrollTop > 100) {
      document.getElementById('header').style.background = '#2093f7'
    } else {
      document.getElementById('header').style.background = 'transparent'
    }
  }

  return (
    <Container id="main" onScroll={scrollFunction}>
      <ContainerIntro>
        <span className="descricao">
          Aqui disponibilizamos algumas ferramentas que auxiliam simulações de
          investimentos
        </span>
        <Link href="/formcalc">
          <Card>
            <h3>Entre e faça sua simulação.</h3>
          </Card>
        </Link>
      </ContainerIntro>
      <DivPage>
        <span>
          Existem vários mótivos dos quais você deveria ao menos pensar em
          investir seu dinheiro. Por exemplo:
        </span>
      </DivPage>
      <ContainerDesc>
        <CardDesc>
          <strong className="title">Por que investir?</strong>
          <span>
            <strong>Seu dinheiro irá trabalhar por você. </strong>
            Claro, que a curto prazo possa ser que não tenha grandes retornos,
            mas se você tiver consistência e pesistência, no longo prazo haverá
            um "pote de ouro" esperando por você.
          </span>
          <br />
          <span>
            <strong>Que tal ter liberdade financeira? </strong>
            Quem é que não deseja ter a tão sonhada liberdade financeira? Ou
            você deseja trabalhar por toda a sua vida?
          </span>
        </CardDesc>

        <CardDesc>
          <strong className="title">Quando devo começar a investir?</strong>
          <span>
            <strong>Já pensou nisso? Que tal começar agora? </strong>
            <br />
            "O melhor momento foi há uns 20 ou 30 anos. O segundo melhor momento
            é agora." - Provérbio chinês.
          </span>
          <br />
          <span>
            <strong>Então, o que você está esperando?</strong>
          </span>
        </CardDesc>

        <CardDesc>
          <strong className="title">Se aposentar com tranquilidade!</strong>
          <span>
            <strong>
              Você quer depender do governo para receber sua aposentadoria?
            </strong>
            <br />
            <span>
              Se você está tabalhando (CLT), então certamente terá uma
              aposentadoria garantida pelo governo (INSS). Mas você sabia que a
              maior parte dos brasileiros recebem apenas um salário mínimo de
              aposentadoria? E que este valor não é o suficiente para pagar um
              plano de saúde para você quando estiver na terceira idade?
            </span>
          </span>
          <br />
          <span>
            <strong>Eai, ai quer depender do governo?</strong>
          </span>
        </CardDesc>
      </ContainerDesc>

      {/* <DivPage>Parceiros</DivPage>
      <a href="https://tetofii.vercel.app" target="_blank">
        <Avatar
          round
          name={parceiro?.name}
          size="60"
          initials="2"
          src={parceiro?.avatar}
        />
      </a> */}
    </Container>
  )
}

export default Home
