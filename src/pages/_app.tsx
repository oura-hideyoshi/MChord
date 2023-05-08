import { Box, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import '../globals.css'
import '../index.css'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 24,
      },
    },
    palette: {
      primary: { main: '#12404e' },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box height={'100vh'}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  )
}
