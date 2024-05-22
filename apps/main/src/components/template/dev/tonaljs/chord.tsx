import { Box, Grid, Tab, Table, TableBody, TableCell, TableRow, Tabs, TextField, Typography } from '@mui/material'
import { Chord } from '@tonaljs/tonal'
import { Chord as ChordType } from '@tonaljs/chord'
import { useState } from 'react'

type Props = {}

const TonaljsChord = ({ ...props }: Props) => {
  const [state, setState] = useState({ get: '', getChord: { tn: '', ot: '', or: '' }, extended: '' })
  const [chord, setChord] = useState(Chord.get(''))
  const [index, setIndex] = useState(0)
  return (
    <Box mt={4}>
      <Tabs
        value={index}
        onChange={(_, value) => {
          setIndex(value)
        }}
        sx={{ mb: 2 }}
      >
        <Tab label="get" />
        <Tab label="getChord" />
        <Tab label="extended" />
      </Tabs>
      <Grid container spacing={4}>
        {index == 0 && (
          <Grid item>
            <TextField label={'Chord.get(*)'} onChange={(event) => setState({ ...state, get: event.target.value })} />
            <ShowChord chord={Chord.get(state.get)} />
          </Grid>
        )}
        {index == 1 && (
          <Grid item>
            <TextField
              label={'Chord.getChord(*, , )'}
              onChange={(event) => setState({ ...state, getChord: { ...state.getChord, tn: event.target.value } })}
            />
            <TextField
              label={'Chord.getChord( ,* , )'}
              onChange={(event) => setState({ ...state, getChord: { ...state.getChord, ot: event.target.value } })}
            />
            <TextField
              label={'Chord.getChord( , ,* )'}
              onChange={(event) => setState({ ...state, getChord: { ...state.getChord, or: event.target.value } })}
            />
            <ShowChord chord={Chord.getChord(state.getChord.tn, state.getChord.ot, state.getChord.or)} />
          </Grid>
        )}
        {index == 2 && (
          <Grid item>
            <TextField label={'Chord.extended(*)'} onChange={(event) => setState({ ...state, extended: event.target.value })} />
            <Typography>{Chord.extended(state.extended).join(' | ')}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

const ShowChord = ({ chord }: { chord: ChordType }) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>name</TableCell>
          <TableCell>{chord.name}</TableCell>
          <TableCell>chroma</TableCell>
          <TableCell>{chord.chroma}</TableCell>
          <TableCell>symbol</TableCell>
          <TableCell>{chord.symbol}</TableCell>
          <TableCell>intervals</TableCell>
          <TableCell>{chord.intervals.join(' | ')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>tonic</TableCell>
          <TableCell>{chord.tonic}</TableCell>
          <TableCell>normalized</TableCell>
          <TableCell>{chord.normalized}</TableCell>
          <TableCell>aliases</TableCell>
          <TableCell>{chord.aliases.join(' | ')}</TableCell>
          <TableCell>notes</TableCell>
          <TableCell>{chord.notes.join(' | ')}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>root</TableCell>
          <TableCell>{chord.root}</TableCell>
          <TableCell>setNum</TableCell>
          <TableCell>{chord.setNum}</TableCell>
          <TableCell>quality</TableCell>
          <TableCell>{chord.quality}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>rootDegree</TableCell>
          <TableCell>{chord.rootDegree}</TableCell>
          <TableCell>type</TableCell>
          <TableCell>{chord.type}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>empty</TableCell>
          <TableCell>{String(chord.empty)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TonaljsChord
