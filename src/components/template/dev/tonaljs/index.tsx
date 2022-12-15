import { Box, Tab, Tabs, Typography } from '@mui/material'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import TonaljsChord from './chord'
import TonaljsChordType from './chord-type'

type Props = {
  children?: ReactNode
}

const TonaljsPage = ({ children, ...props }: Props) => {
  const [index, setIndex] = useState(0)

  const pages: { label: string; content: ReactNode }[] = [
    { label: 'chord', content: <TonaljsChord /> },
    { label: 'chord-type', content: <TonaljsChordType /> },
  ]

  return (
    <Box>
      <Link href={'/'}>back to home</Link>
      <Typography variant={'h2'}>tonaljs</Typography>
      <Tabs value={index} onChange={(_, value) => setIndex(value)} sx={{ mb: 2 }}>
        {pages.map((page) => (
          <Tab key={page.label} label={page.label} />
        ))}
      </Tabs>
      {pages[index].content}
    </Box>
  )
}

export default TonaljsPage
