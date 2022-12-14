import { Box, Tab, Tabs, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import CreateChord from './create-chord'
import UpperAndLower from './upper-and-lower'

export const TranslatePage = ({ ...props }) => {
  const [index, setIndex] = useState(0)

  return (
    <Box>
      <Link href="/">back to home</Link>
      <Typography variant={'h2'}>translate letters</Typography>
      <Tabs value={index} onChange={(_, value) => setIndex(value)}>
        <Tab label={'translate'} />
        <Tab label={'combine'} />
      </Tabs>
      {index == 0 && <UpperAndLower />}
      {index == 1 && <CreateChord />}
    </Box>
  )
}

export default TranslatePage
