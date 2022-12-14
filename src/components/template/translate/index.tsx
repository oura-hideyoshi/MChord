import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import CreateChord from './create-chord'
import UpperAndLower from './upper-and-lower'

export const TranslatePage = ({ ...props }) => {
  return (
    <Box>
      <Link href="/">back to home</Link>
      <Typography variant={'h2'}>translate letters</Typography>
      <UpperAndLower />
      <CreateChord />
    </Box>
  )
}

export default TranslatePage
