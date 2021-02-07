import React, { useEffect } from 'react'
import FormCalc from '../components/FormCalc'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <FormCalc />
    </Container>
  )
}

export default Home
