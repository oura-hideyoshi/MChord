import { Box, Grid, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material'
import { Note as NoteType, NoNote } from '@tonaljs/core'
import { Note } from '@tonaljs/tonal'
import { useState } from 'react'

type Props = {}

const TonaljsNote = ({ ...props }: Props) => {
  const [state, setState] = useState({ note: '' })
  return (
    <Box mt={4}>
      <TextField label={'Note.get(*)'} onChange={(event) => setState({ ...state, note: event.target.value })} />
      <ShowNote note={Note.get(state.note)} />
    </Box>
  )
}

const ShowNote = ({ note }: { note: NoteType | NoNote }) => {
  return (
    <Grid container>
      <Grid item md={6}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>{note.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>letter</TableCell>
              <TableCell>{note.letter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>acc</TableCell>
              <TableCell>{note.acc}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>pc</TableCell>
              <TableCell>{String(note.pc)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>empty</TableCell>
              <TableCell>{String(note.empty)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item md={6}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>step : 度数</TableCell>
              <TableCell>{note.step}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>chroma : 半音数</TableCell>
              <TableCell>{note.chroma}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>oct : octave</TableCell>
              <TableCell>{note.oct}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>alt : 変音数</TableCell>
              <TableCell>{note.alt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>coord : ?</TableCell>
              <TableCell>{note.coord}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>dir : ?</TableCell>
              <TableCell>{note.dir}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>freq : frequency</TableCell>
              <TableCell>{note.freq}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>height</TableCell>
              <TableCell>{note.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>midi</TableCell>
              <TableCell>{note.midi}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  )
}

export default TonaljsNote
