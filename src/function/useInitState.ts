import { Edge, Node } from 'reactflow'
import { useMemo } from 'react'
import { nodeTypes as _nodeTypes, nodeTypeNames } from '../const/nodeTypes'
import { ChordNodeData, TransKeyNodeData } from '../type/NodeData'
import generateUUID from '../utils/generateUUID'

function useInitState() {
  const initialNodes: Node<ChordNodeData | TransKeyNodeData>[] = [
    { id: '0', type: nodeTypeNames.TransKeyNode, position: { x: 0, y: 200 }, data: { key: 'c' } },
    { id: '1', type: nodeTypeNames.ChordNode, position: { x: 200, y: 200 }, data: { chordName: 'Am', key: 'c' } },
    { id: '2', type: nodeTypeNames.ChordNode, position: { x: 300, y: 200 }, data: { chordName: 'F', key: 'c' } },
    { id: '3', type: nodeTypeNames.ChordNode, position: { x: 400, y: 200 }, data: { chordName: 'G', key: 'c' } },
    { id: '4', type: nodeTypeNames.ChordNode, position: { x: 500, y: 200 }, data: { chordName: 'C', key: 'c' } },
  ]
  const initialEdges: Edge[] = [
    { id: generateUUID(), source: '0', target: '1' },
    { id: generateUUID(), source: '1', target: '2' },
    { id: generateUUID(), source: '2', target: '3' },
    { id: generateUUID(), source: '3', target: '4' },
  ]

  // react-flowの都合上、memo化しておかないとレンダリングのループに陥る
  const nodeTypes = useMemo(() => {
    return _nodeTypes
  }, [])

  return { initialNodes, initialEdges, nodeTypes }
}

export default useInitState
