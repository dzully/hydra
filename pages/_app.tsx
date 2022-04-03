import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { red } from '@mui/material/colors'
import { useRouter } from 'next/router'
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import '../styles/globals.css'
import { store } from '../redux/store'
import Container from './Container'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f1fff3',
      dark: '#b6c2b7',
    },
    secondary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
})

const cache = createCache({
  key: 'css',
  prepend: true,
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {router.asPath.indexOf('/home') === -1 ? (
                <Component {...pageProps} />
              ) : (
                <Container>
                  <Component {...pageProps} />
                </Container>
              )}
            </ThemeProvider>
          </CacheProvider>
        </LocalizationProvider>
      </StyledEngineProvider>
    </Provider>
  )
}

export default MyApp
