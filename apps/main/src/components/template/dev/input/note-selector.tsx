import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { DegreeSelector, NoteSelector } from '../../../_inputs'

type Props = {}

const NoteSelectorView = ({ ...props }: Props) => {
  const [state, setState] = useState({ note: '', degree: '' })

  return (
    <Box>
      <NoteSelector onChange={(value) => setState({ ...state, note: value })} />
      <Typography fontSize={'5rem'}>{state.note}</Typography>
      <DegreeSelector onChange={(value) => setState({ ...state, degree: value })} />
      <Typography fontSize={'5rem'}>{state.degree}</Typography>
    </Box>
  )
}

export default NoteSelectorView
