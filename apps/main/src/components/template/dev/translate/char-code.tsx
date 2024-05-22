import { Box, Grid, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material'
import { ReactNode, useState } from 'react'

type Props = {
  children?: ReactNode
}

export const CharCode = ({ children, ...props }: Props) => {
  const [state, setState] = useState({ chars: '', codes: '' })
  return (
    <Box>
      <Typography variant="h3">translate char to char-code</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label={'ex) abcde...'} onChange={(event) => setState({ ...state, chars: event.target.value })} />
          <Table>
            <TableBody>
              {state.chars.split('').map((l, idx) => (
                <TableRow key={idx}>
                  <TableCell>{l}</TableCell>
                  <TableCell>{l.charCodeAt(0)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={6}>
          <TextField label={'ex) 97 98 99...'} onChange={(event) => setState({ ...state, codes: event.target.value })} />
          <Table>
            <TableBody>
              {state.codes.split(' ').map((l, idx) => (
                <TableRow key={idx}>
                  <TableCell>{l}</TableCell>
                  <TableCell>{String.fromCharCode(Number(l))}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CharCode
