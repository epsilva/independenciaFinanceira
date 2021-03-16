import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Avatar from 'react-avatar'
import {
  Container,
  DivPage,
  Card,
  ContainerIntro,
  ContainerDesc,
  CardDesc,
  ContainerDesc2Column,
  CardText
} from '../styles/pages/Home'
import Link from 'next/link'
import Lottie from 'react-lottie'
import animationData from '../assets/scroll-down.json'
import grafico from '../assets/grafico.json'
import corretora from '../assets/corretora.json'
import duvida from '../assets/duvida.json'

interface Parceiro {
  avatar: string
  url: string
  name: string
}

const Home: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const graficoOptions = {
    loop: true,
    autoplay: true,
    animationData: grafico,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const corretoraOptions = {
    loop: true,
    autoplay: true,
    animationData: corretora,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const duvidaOptions = {
    loop: true,
    autoplay: true,
    animationData: duvida,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
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
        <span className="descricao">Você quer investir?</span>
        <span className="descricao">
          Aqui disponibilizamos algumas ferramentas que auxiliam simulações de
          investimentos
        </span>
        <Link href="/formcalc">
          <Card>
            <h3>Entre e faça sua simulação.</h3>
          </Card>
        </Link>
        <h2>
          Em breve traremos conteúdos sobre investimentos
          <br />
          <br />
          <Lottie options={defaultOptions} height={40} width={25} />
        </h2>
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
            <strong>Eai, vai querer depender do governo?</strong>
          </span>
        </CardDesc>
      </ContainerDesc>
      <DivPage>
        <span>
          Se você chegou até aqui, PARABÉNS, você tem interesse em mudar de
          vida.
        </span>
      </DivPage>
      <ContainerDesc2Column>
        <Lottie options={graficoOptions} />
        <CardText>
          <h2>Como investir na Bolsa de Valores?</h2>
          <br />
          <h3>
            Bom, o primeiro passo e mais importante é começar a poupar recursos
            financeiros. Adote este hábito e comece a fazer um controle
            financeiro, saiba o quanto você ganha e o quanto gasta e com o que
            gasta, e reveja esses seus gastos e corte o que você entende como
            não essencial para sua vida ou para sua família. O segundo passo é
            abrir uma conta em alguma corretora.
          </h3>
          <br />
          <strong>
            **Mas não precisa passar vontade, poupar não significa não
            aproveitar a vida.
          </strong>
        </CardText>
        <CardText>
          <h2>E como eu encontro uma corretora?</h2>
          <br />
          <h3>
            Hoje em dia com a modernização de boa parte dos serviços e da
            popularização dos bancos digitáis, ficou muito mais fácil encontrar
            uma corretora que se encaixe no seu perfil. Analise alguns ítens das
            corretoras que está pesquisando.
            <br />
            <br />
            <div className="text-left">
              <span>
                1 - Veja se esta oferece uma boa plataforma para operar
              </span>
              <br />
              <span>
                2 - Quanto cobra pela taxa de corretagem (Hoje existem muitas
                que não cobram por este serviço.)
              </span>
              <br />
              <span>
                3 - Que ofereça uma quantidade aceitável de produtos e com
                qualidade.
              </span>
              <br />
              <span>4 - E que esta possua as certificações da B3</span>
            </div>
          </h3>
          <br />
        </CardText>
        <Lottie options={corretoraOptions} />
        <Lottie options={duvidaOptions} />
        <CardText>
          <h2>E agora o que fazer?</h2>
          <br />
          <h3>
            Existem diversos tipos de investimentos que você pode fazer. Tesouro
            Direto, CDB, LCA e LCI, Acões de Empresas, Fundos de Investimentos
            entre outros. iremos detalhar cada um deles em breve...
          </h3>
          <br />
        </CardText>
      </ContainerDesc2Column>

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
