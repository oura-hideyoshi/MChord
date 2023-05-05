import generateUUID from '../utils/generateUUID'
import { Node } from 'reactflow'
import { nodeTypeNames } from '../const/nodeTypes'
import { ChordNodeData } from '../type/NodeData'

export const createChordNode = (chordNodeData: ChordNodeData) => {
  const newNode: Node<ChordNodeData> = {
    id: generateUUID(),
    type: nodeTypeNames.ChordNode,
    position: { x: 0, y: 0 },
    data: chordNodeData,
  }
  return newNode
}
