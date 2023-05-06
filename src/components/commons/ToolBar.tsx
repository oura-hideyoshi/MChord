import { Box, IconButton, Input, Paper, PaperProps, Stack } from '@mui/material'
import useDrag from '../../hooks/useDrag'
import { useState } from 'react'
import { Chord } from '@tonaljs/tonal'

interface Props extends PaperProps {}

const ToolBar = ({ ...props }: Props) => {
  const [chordName, setChordName] = useState('')
  const [key, setKey] = useState('')
  let isValidChordName = !Chord.get(chordName).empty
  const { createDragChordNodeStartFnc } = useDrag()
  const onDragStart = createDragChordNodeStartFnc(chordName, key)

  return (
    // FIXME react flow の<Panel/>に置き換え
    <Paper component={'aside'} {...props}>
      <Stack direction={'row'}>
        <Stack>
          <IconButton>a</IconButton>
          <IconButton>b</IconButton>
          <IconButton>c</IconButton>
        </Stack>
        <Box>
          {/* FIXME これではdimでもいけてしまう*/}
          <div onDragStart={onDragStart} draggable style={{ padding: 40 }}>
            {isValidChordName ? Chord.get(chordName).symbol : '?'}
          </div>
        </Box>
        <Input value={chordName} onChange={(e) => setChordName(e.target.value)} />
      </Stack>
    </Paper>
  )
}

export default ToolBar
