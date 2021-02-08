import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Container, Row, Column } from './styles'
import { maskMoney } from '../../components/MaksMoney'
import List from './components/List'
import Cards from './components/Cards'
import { IStateLista, IFormInput } from '../types'

const FormCalc: React.FC = () => {
  const [lista, setLista] = useState<IStateLista[]>([])
  const [aporteMensal, setAporteMensal] = useState('0,00')
  const { handleSubmit, register, setValue, errors, getValues } = useForm<
    IFormInput
  >()

  const onSubmit = (data: IFormInput) => {
    const redimentoMensal: number =
      (1 + data.rendimentoAnual / 100) ** (1 / 12) - 1
    const listaTemp: IStateLista[] = []
    for (let i = 0; i < 360; i++) {
      if (i === 0) {
        listaTemp.push({
          mes: i + 1,
          rendimento: 0,
          valorInicial: 0,
          aporteFinal: parseFloat(
            aporteMensal.toString().replace('.', '').replace(',', '.')
          )
        })
      } else {
        const aporteMe = parseFloat(
          aporteMensal.toString().replace('.', '').replace(',', '.')
        )
        const rendimentoAtual: number =
          listaTemp[i - 1].aporteFinal * redimentoMensal
        listaTemp.push({
          mes: i + 1,
          valorInicial: listaTemp[i - 1].aporteFinal,
          rendimento: rendimentoAtual,
          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual
        })
      }
    }
    console.log(listaTemp)
    setLista(listaTemp)
  }

  function calcAporteMensal() {
    const salarioMensal: number = parseFloat(
      getValues('salarioMensal').toString().replace('.', '').replace(',', '.')
    )
    const percentualAporte: number =
      parseInt(getValues('percentualAporte').toString()) / 100
    const aporteMensal: number = percentualAporte * salarioMensal

    if (aporteMensal) {
      setAporteMensal(maskMoney((aporteMensal * 100).toString()))
      const rendaRestante = (salarioMensal - aporteMensal) * 100
      setValue('rendaRestante', maskMoney(rendaRestante.toString()))
    } else {
      setAporteMensal(maskMoney('000'))
      setValue('rendaRestante', maskMoney('000'))
    }
  }

  function onChangeRemunaration(e) {
    setValue('salarioMensal', maskMoney(e.target.value))
    calcAporteMensal()
  }

  function onChangeLimpar() {
    setValue('salarioMensal', undefined)
    setValue('percentualAporte', undefined)
    setValue('rendaRestante', undefined)
    setValue('rendimentoAnual', undefined)
    setAporteMensal('0,00')
    setLista([])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Column>
            <label>Salário Mensal</label>
            <input
              placeholder="R$ 0,00"
              className={errors.salarioMensal && 'inpt-error'}
              type="text"
              name="salarioMensal"
              onChange={onChangeRemunaration}
              ref={register({ required: true })}
            />
          </Column>
          <Column>
            <label>Percentual de Aporte</label>
            <input
              placeholder="100%"
              maxLength={3}
              className={errors.percentualAporte && 'inpt-error'}
              type="text"
              name="percentualAporte"
              onChange={calcAporteMensal}
              ref={register({ required: true, maxLength: 3 })}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <label>Aporte Mensal</label>
            <h2 style={{ color: '#FFF' }}>R$ {aporteMensal}</h2>
          </Column>
          <Column>
            <label>Rendimento Anual</label>
            <input
              placeholder="100%"
              maxLength={3}
              className={errors.rendimentoAnual && 'inpt-error'}
              type="text"
              name="rendimentoAnual"
              ref={register({ required: true, maxLength: 3 })}
            />
          </Column>
        </Row>
        <input type="submit" value="Calcular" />
        <input type="button" value="Limpar" onClick={onChangeLimpar} />
      </Container>
      {lista.length > 0 && (
        <>
          <Cards lista={lista} />
          <List lista={lista} />
        </>
      )}
    </form>
  )
}

export default FormCalc
