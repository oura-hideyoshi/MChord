import { Grid, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import { transLetters2Lower, transLetters2Upper } from '../../../utils/letters'

type Props = {
  children?: ReactNode
}

export const CreateChord = ({ children, ...props }: Props) => {
  const [letters, setLetters] = useState({ base: '', upper: '', lower: '' })
  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography>base</Typography>
        <TextField onChange={(event) => setLetters({ ...letters, base: event.target.value })} />
      </Grid>
      <Grid item xs={3}>
        <Typography>lower</Typography>
        <TextField onChange={(event) => setLetters({ ...letters, lower: transLetters2Lower(event.target.value) })} />
      </Grid>
      <Grid item xs={3}>
        <Typography>upper</Typography>
        <TextField onChange={(event) => setLetters({ ...letters, upper: transLetters2Upper(event.target.value) })} />
      </Grid>
      <Grid item xs={3}>
        <Typography>Chord</Typography>
        <TextField value={letters.base + letters.lower + letters.upper} disabled />
      </Grid>
    </Grid>
  )
}

export default CreateChord
