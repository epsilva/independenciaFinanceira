import React, { useEffect } from 'react'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <>
        <h1>Esta página tem como intuíto disponibilizar</h1>
        <h1>algumas ferramentas para ajudar aqueles</h1>
        <h1>que tem interesse em investir</h1>
        <h1>e queiram simular seus </h1>
        <h1 className="destaque">investimentos</h1>
      </>
      <div>
        <a href="https://tetofii.vercel.app/calculadora" target="_blank">
          Calculadora de teto FII
        </a>
      </div>
    </Container>
  )
}

export default Home
