import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { ChordType } from '@tonaljs/tonal'
import { ChordType as ChordTypeType } from '@tonaljs/chord-type'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const TonaljsChordType = ({ children, ...props }: Props) => {
  const ct = ChordType.all()
  return (
    <Box mt={4}>
      <TableHead>
        <TableCell>name</TableCell>
        <TableCell>quality</TableCell>
        <TableCell>aliases</TableCell>
        <TableCell>intervals</TableCell>
        <TableCell>chroma</TableCell>
        <TableCell>normalized</TableCell>
        <TableCell>setNum</TableCell>
      </TableHead>
      <TableBody>
        {ct.map((item, idx) => (
          <ChordTypeView key={idx} ct={item} />
        ))}
      </TableBody>
    </Box>
  )
}

const ChordTypeView = ({ ct }: { ct: ChordTypeType }) => {
  return (
    <TableRow>
      <TableCell>{ct.name}</TableCell>
      <TableCell>{ct.quality}</TableCell>
      <TableCell>{ct.aliases.join(' | ')}</TableCell>
      <TableCell>{ct.intervals.join(' | ')}</TableCell>
      <TableCell>{ct.chroma}</TableCell>
      <TableCell>{ct.normalized}</TableCell>
      <TableCell>{ct.setNum}</TableCell>
    </TableRow>
  )
}

export default TonaljsChordType
