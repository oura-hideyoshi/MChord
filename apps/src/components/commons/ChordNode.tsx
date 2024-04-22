import { Chord, Progression } from '@tonaljs/tonal'
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow'
import { ChordNodeData } from '../../type/NodeData'
import { useDisplayController } from '../../store'
import { Box, Text, createStyles, rem } from '@mantine/core'
import { useChordColorMap } from '@/states/chordColorMap'
import { isStandardRomanNumerals } from '@/utils/typeGuard'
import { convertToStandardRoman } from '@/utils/converter'

const useStyles = createStyles((theme) => ({
  node: {
    width: 'fit-content',
    paddingLeft: rem(16),
    paddingRight: rem(16),
    backgroundColor: theme.fn.themeColor('smoke'),
    borderRadius: rem(100),
  },
  highlight: {
    border: '1px dashed black',
  },
  target: {
    backgroundColor: theme.fn.themeColor('teal'),
  },
  handle: {},
}))

const ChordNode = ({ ...props }: NodeProps<ChordNodeData>) => {
  const { isRoman } = useDisplayController()
  const { getNodes } = useReactFlow()
  const { colors } = useChordColorMap()

  const { chordName, key } = props.data
  const chord = Chord.get(chordName)
  const { classes } = useStyles()

  const roman = convertToStandardRoman(Progression.toRomanNumerals(key || '', [chord.tonic || ''])[0]) || ''
  const color = isStandardRomanNumerals(roman) ? colors[roman] : '#888'

  const isSelected =
    getNodes().filter((node) => node.selected).length == 1 && getNodes().find((node) => node.selected)?.id == props.id

  // calc display symbol
  let symbol = ''
  if (isRoman) {
    symbol = Progression.toRomanNumerals(key || '', [chord.symbol])[0]
  } else {
    symbol = chord.empty ? '?' : chord.symbol
  }

  return (
    <>
      <Handle type="target" position={Position.Left} />
      {/* TODO: nodeをhover時に＋マーク表示 */}
      <Box
        className={`${classes.node} ${isSelected && classes.highlight}`}
        // onDragEnter={onDragEnter}
        // onDragLeave={onDragLeave}
        // onDrop={onDropNode}
        // onClick={onClick}
        sx={{ backgroundColor: color }}
      >
        <Text sx={{ color: color, filter: 'invert(100%) grayscale(100%) contrast(100)' }}>{symbol}</Text>
      </Box>
      <Handle type="source" position={Position.Right} />
    </>
  )
}

ChordNode.displayName = 'ChordNode'

export default ChordNode
