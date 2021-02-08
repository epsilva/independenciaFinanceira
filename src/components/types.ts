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

export interface IStateLista {
  mes: number
  valorInicial: number
  rendimento: number
  aporteFinal: number
}

export interface IStateDetalhe {
  totalRendimento: string
  total: string
}
