import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'

const ChordNode = memo(({ ...props }: NodeProps) => {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <div style={{ padding: 20 }}>a</div>
      <Handle type="source" position={Position.Right} />
    </>
  )
})

ChordNode.displayName = 'ChordNode'

export default ChordNode
