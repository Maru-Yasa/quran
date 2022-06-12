import { SSRProvider } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../styles/Themes'
import { GlobalStyles } from '../styles/GlobalStyles'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SSRProvider>
  )
}

export default MyApp
