import { Box, Button, Dialog, DialogProps, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import filterChordType from '../../utils/chord-type'
import ChordTypeChip from '../view/chord-type-chip'

type OverWrap = 'onSubmit'
interface Props extends Omit<DialogProps, OverWrap> {
  onSubmit?: (value: string) => void
}

const ChordTypeSelector = ({ onSubmit, ...props }: Props) => {
  const [filter, setFilter] = useState<string[]>([])
  const chordTypes = filterChordType(filter)

  return (
    <Dialog fullWidth transitionDuration={{ appear: 200, enter: 200, exit: 0 }} {...props}>
      <ChordTypeFilter onChange={(values) => setFilter(values)} />
      <Grid container>
        {chordTypes.map((item) => (
          <Grid item xs={4} sm={2} md={2} key={item.chroma}>
            <Button
              onClick={() => {
                onSubmit && onSubmit(item.aliases[0])
                setFilter([])
              }}
              fullWidth
              sx={{ textAlign: 'center', textTransform: 'none' }}
            >
              <Typography>{item.aliases[0]}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Dialog>
  )
}

const ChordTypeFilter = ({ ...props }: { onChange: (values: string[]) => void }) => {
  type filterType = 'maj' | 'min' | '7' | 'M7'
  const [types, setTypes] = useState<{ [_ in filterType]: boolean }>({ maj: false, min: false, 7: false, M7: false })

  const handleClick = (anchor: filterType) => {
    const newTypes = { ...types, [anchor]: !types[anchor] }
    setTypes(newTypes)
    const values = []
    for (let [key, value] of Object.entries(newTypes)) {
      if (value == true) values.push(key)
    }
    props.onChange(values)
  }
  return (
    <Box>
      {Object.keys(types).map((item) => (
        <ChordTypeChip
          key={item}
          label={item}
          color={types[item as filterType] ? 'primary' : 'default'}
          translate={'yes'}
          onClick={() => handleClick(item as filterType)}
        />
      ))}
    </Box>
  )
}

export default ChordTypeSelector
