import { Chord, Progression } from '@tonaljs/tonal'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import { ChordNodeData } from '../../type/NodeData'
import { useDisplayController } from '../../store'

const ChordNode = memo(({ ...props }: NodeProps<ChordNodeData>) => {
  const { isRoman } = useDisplayController()

  const { chordName, key } = props.data
  const chord = Chord.get(chordName)

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
      <div style={{ padding: 20 }}>{symbol}</div>
      <Handle type="source" position={Position.Right} />
    </>
  )
})

ChordNode.displayName = 'ChordNode'

export default ChordNode
