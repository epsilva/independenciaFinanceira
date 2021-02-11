import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { Container, Row, Column } from './styles'
import { maskMoney } from '../MaksMoney'
import { maskDecimal } from '../MaskDecimal'
import List from './components/List'
import Cards from './components/Cards'
import { IStateLista, IFormInput } from '../types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MoneyIcon from '@material-ui/icons/Money'
import Info from '../Info'

const FormCalcPorSalario: React.FC = () => {
  const [lista, setLista] = useState<IStateLista[]>([])
  const [aporteMensal, setAporteMensal] = useState('0,00')
  const [showModal, setShowModal] = useState(true)
  const {
    handleSubmit,
    register,
    setValue,
    errors,
    getValues,
    control
  } = useForm<IFormInput>({
    defaultValues: {
      salarioMensal: null,
      percentualAporte: null,
      rendimentoAnual: null
    }
  })

  const onSubmit = (data: IFormInput) => {
    const rendimentoAnual = parseFloat(
      data.rendimentoAnual.toString().replace(',', '.')
    )
    const redimentoMensal: number = (1 + rendimentoAnual / 100) ** (1 / 12) - 1
    console.log(redimentoMensal)
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
    setLista(listaTemp)
  }

  function calcAporteMensal(e) {
    if (e?.target.name === 'percentualAporte') {
      setValue('percentualAporte', maskDecimal(e?.target.value))
    }
    if (e?.target.name === 'rendimentoAnual') {
      setValue('rendimentoAnual', maskDecimal(e?.target.value))
    }

    const salarioMensal: number = parseFloat(
      getValues('salarioMensal').toString().replace('.', '').replace(',', '.')
    )
    const percentualAporte: number =
      parseFloat(getValues('percentualAporte').toString().replace(',', '.')) /
      100
    const aporteMensal: number = percentualAporte * salarioMensal

    if (aporteMensal) {
      setAporteMensal(maskMoney(Number(aporteMensal).toFixed(2).toString()))
    } else {
      setAporteMensal(maskMoney('000'))
    }
  }

  function onChangeRemunaration(e) {
    setValue('salarioMensal', maskMoney(e.target.value))
    calcAporteMensal(undefined)
  }

  function onChangeLimpar() {
    setValue('salarioMensal', undefined)
    setValue('percentualAporte', undefined)
    setValue('rendimentoAnual', undefined)
    setAporteMensal('0,00')
    setLista([])
  }

  useEffect(() => {
    onChangeLimpar()
    setShowModal(localStorage.getItem('showInfoIndependencia') === null)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        {showModal && (
          <Info parent="showInfoIndependencia">
            <h1>Aviso!</h1>
            <h3>Esta calculadora fará uma simulação de 30 anos.</h3>
            <p>
              Você colocará seus ganhos mensais (Salário Mensal) e o percentual
              que você economizará (Percentual do Aporte) para ter a renda que
              você já recebe e o rendimento anual esperado (Rendimento Anual).
            </p>
          </Info>
        )}
        <Row>
          <Column>
            <Controller
              name="salarioMensal"
              control={control}
              render={() => (
                <TextField
                  error={errors.salarioMensal !== undefined}
                  id="standard-basic"
                  size="small"
                  fullWidth
                  label="Salário Mensal"
                  onChange={onChangeRemunaration}
                  placeholder="0,00"
                  inputRef={register({
                    required: 'Campo obrigatório'
                  })}
                  InputProps={{
                    name: 'salarioMensal',
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Column>
          <Column>
            <Controller
              name="percentualAporte"
              control={control}
              render={() => (
                <TextField
                  error={errors.percentualAporte !== undefined}
                  id="standard-basic"
                  label="Percentual do Aporte"
                  onChange={calcAporteMensal}
                  placeholder="100%"
                  size="small"
                  fullWidth
                  inputRef={register({
                    required: 'Campo obrigatório',
                    maxLength: 6
                  })}
                  inputProps={{
                    maxLength: 6,
                    name: 'percentualAporte'
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MoneyIcon />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <label>Aporte Mensal</label>
            <h2 style={{ color: '#000' }}>R$ {aporteMensal}</h2>
          </Column>
          <Column>
            <Controller
              name="rendimentoAnual"
              control={control}
              render={() => (
                <TextField
                  error={errors.rendimentoAnual !== undefined}
                  id="standard-basic"
                  label="Rendimento Anual"
                  onChange={calcAporteMensal}
                  placeholder="100%"
                  inputRef={register({
                    required: 'Campo obrigatório',
                    maxLength: 6
                  })}
                  size="small"
                  fullWidth
                  inputProps={{
                    maxLength: 6
                  }}
                  InputProps={{
                    name: 'rendimentoAnual',
                    startAdornment: (
                      <InputAdornment position="start">
                        <TrendingUpIcon />
                      </InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Column>
        </Row>
        <Row style={{ justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginRight: '8px' }}
            fullWidth
          >
            Calcular
          </Button>
          <Button
            type="button"
            variant="contained"
            onClick={onChangeLimpar}
            fullWidth
          >
            Limpar
          </Button>
        </Row>
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

export default FormCalcPorSalario
