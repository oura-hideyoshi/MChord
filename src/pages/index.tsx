import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

export const index: NextPage = () => {
  return (
    <Box>
      <Typography position={'relative'}>
        A𝄬
        <Typography variant={'caption'} position={'absolute'} top={-4}>
          -5
        </Typography>
        <Typography variant={'caption'} position={'absolute'} bottom={-4}>
          m7
        </Typography>
      </Typography>
      <Typography>A𝄬ₘ₇⁻⁵</Typography>
    </Box>
  )
}

export default index
