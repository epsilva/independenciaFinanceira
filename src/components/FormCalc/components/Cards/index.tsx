import React, { useEffect, useState } from 'react'

import { Container, CardDetail } from './styles'

const Cards: React.FC = props => {
  const [um, setUm] = useState('0')
  const [dez, setDez] = useState('0')
  const [vinte, setVinte] = useState('0')
  const [trinta, setTrinta] = useState('0')
  useEffect(() => {
    if (props.lista.length > 0) {
      setUm({
        totalRendimento: props.lista[11].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: props.lista[11].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setDez({
        totalRendimento: props.lista[119].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: props.lista[119].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setVinte({
        totalRendimento: props.lista[239].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: props.lista[239].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setTrinta({
        totalRendimento: props.lista[359].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: props.lista[359].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })
    }
  }, [props.lista])

  return (
    <Container>
      <CardDetail>
        <h2>Em 1 ano</h2>
        <p>
          Rendimento Mensal: <strong>{um.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{um.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 10 anos</h2>
        <p>
          Rendimento Mensal: <strong>{dez.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{dez.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 20 anos</h2>
        <p>
          Rendimento Mensal: <strong>{vinte.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{vinte.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 30 ano</h2>
        <p>
          Rendimento Mensal: <strong>{trinta.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{trinta.total}</strong>
        </p>
      </CardDetail>
    </Container>
  )
}

export default Cards
