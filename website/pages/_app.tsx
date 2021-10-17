import '../styles/globals.css'
import '../styles/classess.css'
import '../styles/bootstrap.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { APP_NAME } from '../utils/Config'
import { Provider } from 'react-redux'
import Store from '../redux/Store'
import DrawerHoc from '../HOC/DrawerHoc';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = "light_theme"
  }, [])
  return (
    <div className="App">
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
      <DrawerHoc />
    </div>
  )
  
  
}
export default MyApp
