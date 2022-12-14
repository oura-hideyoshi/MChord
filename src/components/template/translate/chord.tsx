import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Chord } from '@tonaljs/tonal'
import { ReactNode, useState } from 'react'
import { transLetters2Lower, transLetters2Upper } from '../../../utils/letters'

type Props = {
  children?: ReactNode
}

const ChordView = ({ children, ...props }: Props) => {
  const [state, setState] = useState(Chord.get('Cbm7'))

  const base = state.tonic
  const lower = transLetters2Lower(state.quality)
  const upper = transLetters2Upper('')
  const chord = base + lower + upper
  return (
    <Box>
      <TextField placeholder="Cbm7" onChange={(event) => setState(Chord.get(event.target.value))} />
      <Typography>{chord}</Typography>
    </Box>
  )
}

export default ChordView
