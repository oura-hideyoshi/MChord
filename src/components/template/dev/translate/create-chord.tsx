import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'
import { transLetters2Lower, transLetters2Upper } from '../../../../utils/letters'

type Props = {
  children?: ReactNode
}

export const CreateChord = ({ children, ...props }: Props) => {
  const [letters, setLetters] = useState({ base: '', upper: '', lower: '' })
  return (
    <Grid container>
      <Stack spacing={2}>
        <Box>
          <Typography>base</Typography>
          <TextField onChange={(event) => setLetters({ ...letters, base: event.target.value })} />
        </Box>
        <Box>
          <Typography>lower</Typography>
          <TextField onChange={(event) => setLetters({ ...letters, lower: transLetters2Lower(event.target.value) })} />
        </Box>
        <Box>
          <Typography>upper</Typography>
          <TextField onChange={(event) => setLetters({ ...letters, upper: transLetters2Upper(event.target.value) })} />
        </Box>
      </Stack>
      <Grid item xs={6} display={'grid'} sx={{ placeContent: 'center' }}>
        <Typography fontSize={'5rem'}>{letters.base + letters.lower + letters.upper}</Typography>
      </Grid>
    </Grid>
  )
}

export default CreateChord
