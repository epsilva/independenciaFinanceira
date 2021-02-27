import React, { useState } from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Styled } from '../types'
import { Container, Card, ContainerButton } from './styles'

function Info({ children }) {
  const [styled, setStyled] = useState<Styled>({
    showModal: true
  })
  const [check, setCheck] = useState(false)

  function closeModal() {
    if (check) {
      localStorage.setItem(window.location.pathname, 'true')
    }
    setStyled({ showModal: false })
  }

  return (
    <Container showModal={styled.showModal}>
      <Card>
        {children}
        <ContainerButton>
          <FormControlLabel
            control={
              <Checkbox
                checked={check}
                onChange={e => setCheck(e.target.checked)}
                name="checkedB"
                color="primary"
              />
            }
            label="Não mostrar essa mensagem novamente."
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => closeModal()}
          >
            Ok
          </Button>
        </ContainerButton>
      </Card>
    </Container>
  )
}

export default Info
