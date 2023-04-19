import { Chord } from '@tonaljs/tonal'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

const ChordNode = memo(({ ...props }: NodeProps<string>) => {
  const chord = Chord.get(props.data)
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
