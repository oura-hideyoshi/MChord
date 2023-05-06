import { Key, Scale } from '@tonaljs/tonal'
import { memo, useState } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import { TransKeyNodeData } from '../../type/NodeData'
import { Box } from '@mui/material'

type Props = {}

const TransKeyNode = memo(({ ...props }: NodeProps<TransKeyNodeData>) => {
  const [keyTonic, setKeyTonic] = useState('C')
  const [open, setOpen] = useState(false)

  const cChromaticScale = Scale.get('c chromatic').notes
  const aChromaticScale = Scale.get('a chromatic').notes
  const chromaticScale = cChromaticScale.map((_, idx) => {
    return cChromaticScale[idx] + ' / ' + aChromaticScale[idx] + 'm'
  })

  const key = Key.majorKey(keyTonic)

  return (
    <>
      <Box m={2}>
        <Handle type="source" position={Position.Right} />
        <select>
          {chromaticScale.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        key
      </Box>
    </>
  )
})

TransKeyNode.displayName = 'TransKeyNode'

export default TransKeyNode
