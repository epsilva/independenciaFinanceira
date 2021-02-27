import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import routes from 'next-routes'
import * as gtag from '../../lib/gtag'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default MyApp
