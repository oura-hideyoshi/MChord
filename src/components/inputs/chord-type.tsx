import { Box, Button, Dialog, DialogProps, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import filterChordType from '../../utils/chord-type'
import ChordTypeChip from '../view/chord-type-chip'

type OverWrap = 'onSubmit'
interface Props extends Omit<DialogProps, OverWrap> {
  onSubmit?: (value: string) => void
}

const ChordTypeSelector = ({ onSubmit, ...props }: Props) => {
  const [state, setState] = useState('')
  const [filter, setFilter] = useState<string[]>(['7', '6'])
  const [open, setOpen] = useState(false)
  const chordTypes = filterChordType(filter)

  return (
    <Dialog onClose={() => setOpen(false)} fullWidth {...props}>
      <ChordTypeFilter />
      <Grid container>
        {chordTypes.map((item) => (
          <Grid item xs={4} sm={2} md={2} key={item.chroma}>
            <Button fullWidth sx={{ textAlign: 'center', textTransform: 'none' }}>
              <Typography>{item.aliases[0]}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Dialog>
  )
}

const ChordTypeFilter = () => {
  const types = ['Maj', 'min', '7', 'M7']
  return (
    <Box>
      {types.map((item) => (
        <ChordTypeChip key={item} label={item} />
      ))}
    </Box>
  )
}

export default ChordTypeSelector
