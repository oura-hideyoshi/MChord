import type { AppProps } from 'next/app'
import '@/styles/index.css'
import { Box, MantineProvider } from '@mantine/core'
import overridedTheme from '@/styles/overrideTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={overridedTheme}>
      <Box h={'100vh'}>
        <Component {...pageProps} />
      </Box>
    </MantineProvider>
  )
}
