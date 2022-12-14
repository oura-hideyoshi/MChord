import { Box, Typography } from '@mui/material'
import { Chord } from '@tonaljs/tonal'
import { NextPage } from 'next'
import ChordBlock from '../components/view/chord-block'

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
      <ChordBlock chord={Chord.get('Cm7')} />
    </Box>
  )
}

export default index
