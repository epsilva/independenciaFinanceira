import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import routes from 'next-routes'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      {new routes().Router.router?.asPath !== '/login' && <Header />}
    </ThemeProvider>
  )
}

export default MyApp
