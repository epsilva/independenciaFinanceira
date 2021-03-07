import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { AuthProvider } from '../../lib/auth'
import * as gtag from '../../lib/gtag'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useAuth } from '../../lib/auth'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const { auth } = useAuth()
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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
        {auth && (
          <>
            <GlobalStyle />
            <Header />
          </>
        )}
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
