import { Box, Typography } from '@mui/material'
import { Chord } from '@tonaljs/chord'

type Props = { chord: Chord }

export const ChordBlock = ({ ...props }: Props) => {
  return (
    <Box>
      <Typography>{props.chord.symbol}</Typography>
    </Box>
  )
}

export default ChordBlock
