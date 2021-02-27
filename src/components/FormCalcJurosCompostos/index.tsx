import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { Container, Row, Column } from './styles'
import { maskMoney } from '../MaksMoney'
import { maskDecimal } from '../MaskDecimal'
import { IFormInputJuros, IOptionsCharts } from '../types'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import DateRange from '@material-ui/icons/DateRange'
import Card from './components/Card'
import LineChart from '../Charts/LineChart'
import Info from '@material-ui/icons/Info'
import Tooltip from '@material-ui/core/Tooltip'

const FormCalcJurosCompostos: React.FC = () => {
  const [lista, setLista] = useState([])
  const [showModal, setShowModal] = useState(true)
  const {
    handleSubmit,
    register,
    setValue,
    errors,
    getValues,
    control
  } = useForm<IFormInputJuros>({
    defaultValues: {
      valorInicial: null,
      valorMensal: null,
      taxaJuros: null,
      tempoMeses: null
    }
  })
  const [labels, setLabels] = useState<string[]>()
  const [dataSet, setDataSet] = useState<IOptionsCharts[]>()

  const castFloat = valor => {
    return parseFloat(valor.toString().replace('.', '').replace(',', '.'))
  }

  const castInt = valor => {
    return parseInt(valor.toString())
  }

  const onSubmit = (data: IFormInputJuros) => {
    let valorInicial = castFloat(data.valorInicial)
    let valorMensal = castFloat(data.valorMensal)
    let taxaJuros = castFloat(data.taxaJuros)
    let tempoMeses = castInt(data.tempoMeses)

    let investimentoAcumulado = valorInicial
    var totalInvestimentoAcumulado = valorInicial + valorMensal * tempoMeses

    let jurosCompostos = 0
    let jurosCompostosTotal = 0

    const listaCalc = []
    const labelsLine: string[] = []
    const dataLine1: number[] = []
    const dataLine2: number[] = []
    for (let i = 0; i < tempoMeses; i++) {
      jurosCompostos = (investimentoAcumulado * taxaJuros) / 100
      jurosCompostosTotal += jurosCompostos
      investimentoAcumulado += jurosCompostos + valorMensal
      listaCalc.push({
        mes: i,
        rendimento: jurosCompostosTotal,
        total: investimentoAcumulado,
        totalInvestido: totalInvestimentoAcumulado / (tempoMeses / i)
      })

      const ms = new Date().getTime() + 2592000000 * i
      const now = new Date(ms)

      labelsLine.push(`${now.getMonth() + 1}/${now.getFullYear()}`)
      dataLine2.push(investimentoAcumulado)
      dataLine1.push(totalInvestimentoAcumulado / (tempoMeses / i))
    }
    setLista(listaCalc)
    setLabels(labelsLine)
    setDataSet([
      {
        label: 'Total Investido',
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
        data: dataLine1
      },
      {
        label: 'Total Acumulado',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#36A2EB',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#36A2EB',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#36A2EB',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataLine2
      }
    ])

    // var valorReceber = totalInvestimentoAcumulado + jurosCompostosTotal
  }

  function onChangeLimpar() {
    setValue('valorInicial', undefined)
    setValue('valorMensal', undefined)
    setValue('taxaJuros', undefined)
    setValue('tempoMeses', undefined)
    setLista([])
    setLabels([])
    setDataSet([])
  }

  function onChangeValorInicial(e) {
    setValue('valorInicial', maskMoney(e.target.value))
  }

  function onChangeValorMensal(e) {
    setValue('valorMensal', maskMoney(e.target.value))
  }

  function onChangeTaxaJuros(e) {
    setValue('taxaJuros', maskDecimal(e?.target.value))
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
              name="valorInicial"
              control={control}
              render={() => (
                <TextField
                  error={errors.valorInicial !== undefined}
                  id="standard-basic"
                  size="small"
                  fullWidth
                  label={
                    <Row>
                      Valor Inicial{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado o valor incial que será usado nas suas aplicações">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  placeholder="5.000,00"
                  onChange={onChangeValorInicial}
                  inputRef={register({
                    required: 'Campo obrigatório'
                  })}
                  InputProps={{
                    name: 'valorInicial',
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
              name="valorMensal"
              control={control}
              render={() => (
                <TextField
                  error={errors.valorMensal !== undefined}
                  id="standard-basic"
                  label={
                    <Row>
                      Valor Mensal{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado o valor que será aplicado mensalmento">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  placeholder="500,00"
                  size="small"
                  fullWidth
                  onChange={onChangeValorMensal}
                  inputRef={register({
                    required: 'Campo obrigatório'
                  })}
                  inputProps={{
                    name: 'valorMensal'
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    )
                  }}
                />
              )}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Controller
              name="taxaJuros"
              control={control}
              render={() => (
                <TextField
                  error={errors.taxaJuros !== undefined}
                  id="standard-basic"
                  label={
                    <Row>
                      Taxa Juros Mensal{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado a taxa de juros que suas aplicações está rendendo por mês">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  placeholder="0,65%"
                  onChange={onChangeTaxaJuros}
                  inputRef={register({
                    required: 'Campo obrigatório',
                    maxLength: 6
                  })}
                  size="small"
                  fullWidth
                  inputProps={{
                    maxLength: 6,
                    name: 'taxaJuros'
                  }}
                  InputProps={{
                    name: 'taxaJuros',
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
          <Column>
            <Controller
              name="tempoMeses"
              control={control}
              render={() => (
                <TextField
                  error={errors.tempoMeses !== undefined}
                  id="standard-basic"
                  label={
                    <Row>
                      Tempo em Meses{' '}
                      <InputAdornment position="end">
                        <Tooltip title="Aqui será informado o tempo que que desejas manter seus investimentos">
                          <Info />
                        </Tooltip>
                      </InputAdornment>
                    </Row>
                  }
                  placeholder="360"
                  inputRef={register({
                    required: 'Campo obrigatório',
                    maxLength: 3
                  })}
                  size="small"
                  fullWidth
                  inputProps={{
                    maxLength: 3
                  }}
                  InputProps={{
                    name: 'tempoMeses',
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRange />
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
          <Card formJuros={lista[lista.length - 1]} />
          <LineChart labels={labels} dataSet={dataSet} />
        </>
      )}
    </form>
  )
}

export default FormCalcJurosCompostos
