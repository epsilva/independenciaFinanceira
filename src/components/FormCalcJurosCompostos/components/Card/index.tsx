import React from 'react'
import { maskMoney } from '../../../MaksMoney'
import { IStateListaJuros } from '../../../types'

import { Container, CardDetail } from './styles'

interface Props {
  formJuros: IStateListaJuros
}

const Card: React.FC<Props> = ({ formJuros }: Props) => {
  return (
    <Container>
      <CardDetail>
        <p>
          Valor Investido:{' '}
          <strong>
            R${' '}
            {maskMoney(Number(formJuros?.totalInvestido).toFixed(2).toString())}
          </strong>
        </p>
        <p>
          Rendimento:{' '}
          <strong>
            R$ {maskMoney(Number(formJuros?.rendimento).toFixed(2).toString())}
          </strong>
        </p>
        <p>
          Total:{' '}
          <strong>
            R$ {maskMoney(Number(formJuros?.total).toFixed(2).toString())}
          </strong>
        </p>
      </CardDetail>
    </Container>
  )
}

export default Card
