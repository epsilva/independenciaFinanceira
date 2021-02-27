import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { Container, Row, Column, HideShow } from './styles'
import { maskMoney } from '../MaksMoney'
import { maskDecimal } from '../MaskDecimal'
import List from './components/List'
import Cards from './components/Cards'
import { IStateLista, IFormInput, IOptionsCharts } from '../types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import MoneyIcon from '@material-ui/icons/Money'
import Info from '@material-ui/icons/Info'
import LineChart from '../Charts/LineChart'
import Tooltip from '@material-ui/core/Tooltip'

const FormCalcPorSalario: React.FC = () => {
  const [lista, setLista] = useState<IStateLista[]>([])
  const [aporteMensal, setAporteMensal] = useState('0,00')
  const [showModal, setShowModal] = useState(true)
  const [labels, setLabels] = useState<string[]>()
  const [dataSet, setDataSet] = useState<IOptionsCharts[]>()
  const [show, setShow] = useState<boolean>(false)
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
    const listaTemp: IStateLista[] = []
    let ano = 60
    const labelsLine: string[] = []
    const dataLine: string[] = []
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

        if (ano === i + 1) {
          labelsLine.push(`Ano ${ano / 12}`)
          const valor =
            aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual
          dataLine.push(valor.toFixed(2))
          ano = ano + 60
        }
      }
    }

    setDataSet([
      {
        label: 'Evolução Patrimônial',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataLine
      }
    ])
    setLabels(labelsLine)
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
    setShowModal(localStorage.getItem(window.location.pathname) === null)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
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
                  label={
                    <Row>
                      Salário Mensal{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado a sua renda mensal">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  onChange={onChangeRemunaration}
                  placeholder="3.000,00"
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
                  label={
                    <Row>
                      Valor Mensal{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado a percentagem do quanto deseja reservar do seu salário para aplicar mensalmente">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  onChange={calcAporteMensal}
                  placeholder="20%"
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
                  label={
                    <Row>
                      Rendimento Anual{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado o redimento anual de suas aplicações">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  onChange={calcAporteMensal}
                  placeholder="8,65%"
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
          <LineChart labels={labels} dataSet={dataSet} />
          <Button onClick={() => setShow(!show)}>
            {show ? 'Esconder Detalhes' : 'Exibir Detalhes'}
          </Button>
          <HideShow show={show}>
            <List lista={lista} />{' '}
          </HideShow>
        </>
      )}
    </form>
  )
}

export default FormCalcPorSalario
