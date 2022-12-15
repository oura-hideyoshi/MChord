import { Box, Tab, Tabs, Typography } from '@mui/material'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import CharCode from './char-code'
import ChordView from './chord'
import CreateChord from './create-chord'
import Translator from './translator'

export const TranslatePage = ({ ...props }) => {
  const [index, setIndex] = useState(0)

  const pages: { label: string; content: ReactNode }[] = [
    { label: 'char code', content: <CharCode /> },
    { label: 'translate', content: <Translator /> },
    { label: 'combine', content: <CreateChord /> },
    { label: 'chord', content: <ChordView /> },
  ]

  return (
    <Box>
      <Link href="/">back to home</Link>
      <Typography variant={'h2'}>translate letters</Typography>
      <Tabs value={index} onChange={(_, value) => setIndex(value)} sx={{ mb: 2 }}>
        {pages.map((page) => (
          <Tab key={page.label} label={page.label} />
        ))}
      </Tabs>
      {pages[index].content}
    </Box>
  )
}

export default TranslatePage
