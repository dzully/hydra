import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import { red } from '@mui/material/colors'
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

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#e8f5e9',
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
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </LocalizationProvider>
      </StyledEngineProvider>
    </Provider>
  )
}

export default MyApp
