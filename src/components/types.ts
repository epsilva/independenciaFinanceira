export interface CardData {
  id: string
  category: string
  title: string
  pointOfInterest: number
  backgroundColor: string
  price: number
  description: string
}

export interface IFormInput {
  salarioMensal: number
  percentualAporte: number
  aporteMensal: number
  rendaRestante: number
  rendimentoAnual: number
}

export interface IFormInputJuros {
  valorInicial: number
  valorMensal: number
  taxaJuros: number
  tempoMeses: number
}

export interface IStateLista {
  mes: number
  valorInicial: number
  rendimento: number
  aporteFinal: number
}

export interface IStateListaJuros {
  mes: number
  rendimento: number
  totalInvestido: number
  total: number
}
export interface Styled {
  openNav?: boolean
  showModal?: boolean
  show?: boolean
}

export interface IStateCharts {
  labels?: []
  datasets?: IOptionsCharts[]
}

export interface IOptionsCharts {
  label: string
  fill: boolean
  lineTension: number
  backgroundColor: string
  borderColor: string
  borderCapStyle: string
  borderDash: []
  borderDashOffset: number
  borderJoinStyle: string
  pointBorderColor: string
  pointBackgroundColor: string
  pointBorderWidth: number
  pointHoverRadius: number
  pointHoverBackgroundColor: string
  pointHoverBorderColor: string
  pointHoverBorderWidth: number
  pointRadius: number
  pointHitRadius: number
  data: any[]
}

export interface IStateDetalhe {
  totalRendimento: string
  total: string
}
