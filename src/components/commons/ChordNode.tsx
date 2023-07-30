import { Chord, Progression } from '@tonaljs/tonal'
import { DragEventHandler, MouseEventHandler, useState } from 'react'
import { Edge, Handle, NodeProps, Position, useNodeId, useReactFlow } from 'reactflow'
import { ChordNodeData } from '../../type/NodeData'
import { useDisplayController } from '../../store'
import { format } from '../../const/dataTransfer'
import { nodeTypeNames } from '../../const/nodeTypes'
import { createDraftNode } from '../../function/createNode'
import generateUUID from '../../utils/generateUUID'
import { Node } from 'reactflow'
import { Box, createStyles, rem } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { nodeSelector } from '@/states/nodeSelector'
import { toolbarController } from '@/states/componentController'
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
  const [isOverlapping, setIsOverlapping] = useState(false)
  const nodeId = useNodeId()
  const reactFlow = useReactFlow()
  const [selectNodeId, setSelectNodeId] = useRecoilState(nodeSelector)
  const [_, setComponentController] = useRecoilState(toolbarController)
  const { colors } = useChordColorMap()

  const { chordName, key } = props.data
  const chord = Chord.get(chordName)
  const { classes } = useStyles()

  const roman = convertToStandardRoman(Progression.toRomanNumerals(key || '', [chord.tonic || ''])[0]) || ''
  const chordType = chord.type
  let color = ''
  if (isStandardRomanNumerals(roman)) {
    color = colors[roman]['maj']
  }

  // calc display symbol
  let symbol = ''
  if (isRoman) {
    symbol = Progression.toRomanNumerals(key || '', [chord.symbol])[0]
  } else {
    symbol = chord.empty ? '?' : chord.symbol
  }

  const isSelected = selectNodeId == nodeId

  const onDragEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOverlapping(true)
  }
  const onDragLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsOverlapping(false)
  }
  const onDropNode: DragEventHandler<HTMLDivElement> = (e) => {
    setIsOverlapping(false)

    // prepare two nodes and an edge as connector
    const sourceNode = reactFlow.getNode(nodeId!) as Node<ChordNodeData>
    let targetNode = createDraftNode()
    const newEdge: Edge = { id: generateUUID(), source: sourceNode.id, target: targetNode.id }

    // add data to target node
    const nodeType = e.dataTransfer.getData(format.nodeType)
    switch (nodeType) {
      case nodeTypeNames.ChordNode:
        const chordNodeData = JSON.parse(e.dataTransfer.getData(format.chordData)) as ChordNodeData
        chordNodeData.key = sourceNode.data.key
        targetNode.type = nodeTypeNames.ChordNode
        targetNode.data = chordNodeData
        break
      case nodeTypeNames.TransKeyNode:
        // TODO
        break
    }
    targetNode.position.x = sourceNode.position.x + 100
    targetNode.position.y = sourceNode.position.y

    // set above instances on reactflow
    reactFlow.addNodes(targetNode)
    reactFlow.addEdges(newEdge)
  }
  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    setSelectNodeId(nodeId!)
    setComponentController({ command: 'edit' })
  }

  return (
    <>
      <Handle type="target" position={Position.Left} />
      {/* TODO: nodeをhover時に＋マーク表示 */}
      <Box
        className={`${classes.node} ${isSelected && classes.highlight} ${isOverlapping && classes.target}`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDropNode}
        onClick={onClick}
        sx={{ backgroundColor: color }}
      >
        {symbol}
      </Box>
      <Handle type="source" position={Position.Right} />
    </>
  )
}

ChordNode.displayName = 'ChordNode'

export default ChordNode
