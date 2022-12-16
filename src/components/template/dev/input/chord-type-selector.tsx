import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { ChordTypeSelector } from '../../../inputs'

type Props = {}

const ChordTypeSelectorView = ({ ...props }: Props) => {
  const [state, setState] = useState({ chordType: '' })
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button onClick={() => setOpen(true)}>open</Button>
      <ChordTypeSelector
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(value) => {
          setState({ ...state, chordType: value })
          setOpen(false)
        }}
      />
      <Typography fontSize={'5rem'}>{state.chordType}</Typography>
    </Box>
  )
}

export default ChordTypeSelectorView
