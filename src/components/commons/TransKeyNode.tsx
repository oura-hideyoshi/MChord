import { Key, Scale } from '@tonaljs/tonal'
import { ChangeEventHandler, DragEventHandler, memo, useState } from 'react'
import { Edge, Handle, NodeProps, Position, ReactFlowInstance, useNodeId, useReactFlow } from 'reactflow'
import { ChordNodeData, TransKeyNodeData } from '../../type/NodeData'
import { Box } from '@mui/material'
import { format } from '../../const/dataTransfer'
import { nodeTypeNames } from '../../const/nodeTypes'
import { createDraftNode } from '../../function/createNode'
import generateUUID from '../../utils/generateUUID'
import { Node } from 'reactflow'

type Props = {}

const TransKeyNode = memo(({ ...props }: NodeProps<TransKeyNodeData>) => {
  const [keyTonic, setKeyTonic] = useState('C')
  const reactFlow = useReactFlow()
  const [isOverlapping, setIsOverlapping] = useState(false)
  const nodeId = useNodeId()!

  const [cScale, scale] = createScale()

  const key = Key.majorKey(keyTonic)

  const onDropNode: DragEventHandler<HTMLDivElement> = (e) => {
    setIsOverlapping(false)

    // prepare two nodes and an edge as connector
    const sourceNode = reactFlow.getNode(nodeId) as Node<TransKeyNodeData>
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
        // do nothing
        break
    }
    targetNode.position.x = sourceNode.position.x + 100
    targetNode.position.y = sourceNode.position.y

    // set above instances on reactflow
    reactFlow.addNodes(targetNode)
    reactFlow.addEdges(newEdge)
  }

  const onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setKeyTonic(e.target.value)
    console.log('e.target.value', e.target.value)
    updateNodeFromRoot(reactFlow, nodeId, (node) => (node.data = { ...node.data, key: e.target.value }))
  }

  const updateNodeFromRoot = (
    reactflow: ReactFlowInstance,
    rootNodeId: string,
    callback: (node: Node) => void,
    continueFnc?: (node: Node) => boolean
  ) => {
    continueFnc ??= () => false // defaultでは、continueの判断をしない

    const nodes = reactFlow.getNodes()
    const edges = reactFlow.getEdges()
    const rootNode = nodes.find((node) => (node.id = rootNodeId))
    if (!rootNode) return

    const nodeQ = [rootNode]
    while (nodeQ.length != 0) {
      const currentNode = nodeQ.shift()!

      if (continueFnc(currentNode)) continue
      callback(currentNode)

      // push nodes connected with currentNode
      const connectedEdges = edges.filter((e) => e.source == currentNode.id)
      connectedEdges.forEach((edge) => {
        const connectedNode = nodes.find((node) => node.id == edge.target)!
        nodeQ.push(connectedNode)
      })
    }
    reactFlow.setNodes(nodes)
  }

  return (
    <>
      <Box m={2} onDrop={onDropNode}>
        <Handle type="source" position={Position.Right} />
        <select value={keyTonic} onChange={onChange}>
          {scale.map((item, idx) => (
            <option key={item} value={cScale[idx]}>
              {item}
            </option>
          ))}
        </select>
        key
      </Box>
    </>
  )
})

const createScale = () => {
  const cChromaticScale = Scale.get('c chromatic').notes
  const aChromaticScale = Scale.get('a chromatic').notes
  const scale = cChromaticScale.map((_, idx) => {
    return cChromaticScale[idx] + ' / ' + aChromaticScale[idx] + 'm'
  })
  return [cChromaticScale, scale]
}

TransKeyNode.displayName = 'TransKeyNode'

export default TransKeyNode
