import { Box, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import { transLetters2Accidental } from '../../../../utils/letters'
import NoteSelector from '../../../inputs/note'

type Props = {
  children?: ReactNode
}

const NoteSelectorView = ({ children, ...props }: Props) => {
  const [state, setState] = useState('')

  return (
    <Box>
      <NoteSelector onChange={(value) => setState(value)} />
      <Typography fontSize={'5rem'}>{transLetters2Accidental(state)}</Typography>
    </Box>
  )
}

export default NoteSelectorView
