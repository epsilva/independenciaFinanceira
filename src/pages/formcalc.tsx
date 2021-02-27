import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import FormCalcPorSalario from '../components/FormCalcPorSalario'
import FormCalcJurosCompostos from '../components/FormCalcJurosCompostos'
import { Container } from '../styles/pages/FormCalc'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography style={{ paddingTop: '12px' }}>{children}</Typography>
      )}
    </div>
  )
}

const FormCalc: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Container>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="Independênia" />
        <Tab label="Juros Compostos" />
      </Tabs>
      <>
        <TabPanel value={value} index={0}>
          <FormCalcPorSalario />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormCalcJurosCompostos />
        </TabPanel>
      </>
    </Container>
  )
}

export default FormCalc
