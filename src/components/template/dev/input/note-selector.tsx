import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { ChordTypeSelector, DegreeSelector, NoteSelector } from '../../../inputs'

type Props = {}

const NoteSelectorView = ({ ...props }: Props) => {
  const [state, setState] = useState({ note: '', degree: '', chordType: '' })
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <NoteSelector onChange={(value) => setState({ ...state, note: value })} />
      <Typography fontSize={'5rem'}>{state.note}</Typography>
      <DegreeSelector onChange={(value) => setState({ ...state, degree: value })} />
      <Typography fontSize={'5rem'}>{state.degree}</Typography>
      <Button onClick={() => setOpen(true)}>open</Button>
      <ChordTypeSelector open={open} onClose={() => setOpen(false)} />
      <Typography fontSize={'5rem'}>{state.chordType}</Typography>
    </Box>
  )
}

export default NoteSelectorView
