import { Box } from '@mui/material'
import type { AppProps } from 'next/app'
import '../index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box height={'100vh'}>
      <Component {...pageProps} />
    </Box>
  )
}
