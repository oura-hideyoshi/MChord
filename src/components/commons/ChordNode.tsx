import { Chord } from '@tonaljs/tonal'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import { ChordNodeData } from '../../type/NodeData'

const ChordNode = memo(({ ...props }: NodeProps<ChordNodeData>) => {
  const chord = Chord.get(props.data.chordName)
  const symbol = chord.empty ? '?' : chord.symbol

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
