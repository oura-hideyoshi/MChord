import { Box, IconButton, Input, Paper, PaperProps, Stack } from '@mui/material'
import useDrag from '../../hooks/useDrag'
import { useState } from 'react'
import { Chord } from '@tonaljs/tonal'

interface Props extends PaperProps {}

const ToolBar = ({ ...props }: Props) => {
  const [chordName, setChordName] = useState('')

  const { createDragChordNodeStartFnc } = useDrag()
  const onDragStart = createDragChordNodeStartFnc(chordName)

  return (
    <Paper component={'aside'} {...props}>
      <Stack direction={'row'}>
        <Stack>
          <IconButton>a</IconButton>
          <IconButton>b</IconButton>
          <IconButton>c</IconButton>
        </Stack>
        <Box>
          {/* FIXME これではdivでもいけてしまう*/}
          <div onDragStart={onDragStart} draggable style={{ padding: 40 }}>
            {Chord.chord(chordName).empty ? '?' : Chord.chord(chordName).symbol}
          </div>
        </Box>
        <Input value={chordName} onChange={(e) => setChordName(e.target.value)} />
      </Stack>
    </Paper>
  )
}

export default ToolBar
