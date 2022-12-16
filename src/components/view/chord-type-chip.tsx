import { Chip, ChipProps } from '@mui/material'

interface Props extends ChipProps {}

const ChordTypeChip = ({ ...props }: Props) => {
  return <Chip {...props} />
}

export default ChordTypeChip
