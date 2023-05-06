import { Chip, ChipProps } from '@mui/material'

interface Props extends ChipProps {}

const ChordTypeChip = ({ ...props }: Props) => {
  return <Chip sx={{ minWidth: 50 }} {...props} />
}

export default ChordTypeChip
