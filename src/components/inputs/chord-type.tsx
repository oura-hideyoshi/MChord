import { Button, Dialog, DialogProps } from '@mui/material'
import { ChordType as ChordTypeType } from '@tonaljs/chord-type'
import { ChordType } from '@tonaljs/tonal'
import { useState } from 'react'

interface Props extends DialogProps {}

const ChordTypeSelector = ({ ...props }: Props) => {
  const [state, setState] = useState('')
  const [open, setOpen] = useState(false)
  // TODO どこかでconstとしてexport
  const maj: ChordTypeType[] = []
  const min: ChordTypeType[] = []
  const dim: ChordTypeType[] = []
  const aug: ChordTypeType[] = []
  const unk: ChordTypeType[] = []
  ChordType.all().forEach((item) => {
    switch (item.quality) {
      case 'Major':
        maj.push(item)
      case 'Minor':
        min.push(item)
      case 'Diminished':
        dim.push(item)
      case 'Augmented':
        aug.push(item)
      case 'Unknown':
        unk.push(item)
    }
  })

  return (
    <Dialog onClose={() => setOpen(false)} {...props}>
      {maj.map((item) => (
        <Button key={item.normalized}>{item.aliases[0]}</Button>
      ))}
    </Dialog>
  )
}

export default ChordTypeSelector
