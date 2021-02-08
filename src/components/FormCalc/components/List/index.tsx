import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { Container } from './styles'
import { IStateLista } from '../../../types'

interface Column {
  id: 'mes' | 'rendimento' | 'valorInicial' | 'aporteFinal'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'mes', label: 'Mês', minWidth: 20 },
  { id: 'rendimento', label: 'Rendimento (R$)', minWidth: 100 },
  {
    id: 'valorInicial',
    label: 'Valor Inicial (R$)',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('pt-Br')
  },
  {
    id: 'aporteFinal',
    label: 'Aporte Final',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('pt-Br')
  }
]

interface Props {
  lista: IStateLista[]
}

const List: React.FC<Props> = ({ lista }: Props) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Container>
      {lista.length > 0 && (
        <Paper style={{ width: '100%' }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {lista
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                        <TableCell key={idx}>{row.mes}</TableCell>
                        <TableCell key={idx}>
                          {row.rendimento.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </TableCell>
                        <TableCell key={idx}>
                          {row.valorInicial.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </TableCell>
                        <TableCell key={idx}>
                          {row.aporteFinal.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </TableCell>
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={360}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Container>
  )
}

export default List
