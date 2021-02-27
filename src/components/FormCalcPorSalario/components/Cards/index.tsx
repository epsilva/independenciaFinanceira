import React, { useEffect, useState } from 'react'

import { IStateDetalhe, IStateLista } from '../../../types'
import { Container, CardDetail } from './styles'

interface Props {
  lista: IStateLista[]
}

const Cards: React.FC<Props> = ({ lista }: Props) => {
  const [um, setUm] = useState<IStateDetalhe>()
  const [dez, setDez] = useState<IStateDetalhe>()
  const [vinte, setVinte] = useState<IStateDetalhe>()
  const [trinta, setTrinta] = useState<IStateDetalhe>()

  useEffect(() => {
    if (lista.length > 0) {
      setUm({
        totalRendimento: lista[11].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: lista[11].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setDez({
        totalRendimento: lista[119].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: lista[119].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setVinte({
        totalRendimento: lista[239].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: lista[239].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })

      setTrinta({
        totalRendimento: lista[359].rendimento.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }),
        total: lista[359].aporteFinal.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
      })
    }
  }, [lista])

  return (
    <Container>
      <CardDetail>
        <h2>Em 1 ano</h2>
        <p>
          Rendimento Mensal: <strong>{um?.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{um?.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 10 anos</h2>
        <p>
          Rendimento Mensal: <strong>{dez?.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{dez?.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 20 anos</h2>
        <p>
          Rendimento Mensal: <strong>{vinte?.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{vinte?.total}</strong>
        </p>
      </CardDetail>
      <CardDetail>
        <h2>Em 30 anos</h2>
        <p>
          Rendimento Mensal: <strong>{trinta?.totalRendimento}</strong>
        </p>
        <p>
          Total Acumulado: <strong>{trinta?.total}</strong>
        </p>
      </CardDetail>
    </Container>
  )
}

export default Cards
