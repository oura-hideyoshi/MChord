import { Node } from 'reactflow'
import { useMemo } from 'react'
import { nodeTypes as _nodeTypes, nodeTypeNames } from '../const/nodeTypes'
import { ChordNodeData } from '../type/NodeData'

function useInitState() {
  const initialNodes: Node<ChordNodeData>[] = [
    { id: '1', type: nodeTypeNames.ChordNode, position: { x: 0, y: 200 }, data: { chordName: 'c', key: 'c' } },
    { id: '2', type: nodeTypeNames.ChordNode, position: { x: 200, y: 200 }, data: { chordName: 'd', key: 'c' } },
  ]
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

  // react-flowの都合上、memo化しておかないとレンダリングのループに陥る
  const nodeTypes = useMemo(() => {
    return _nodeTypes
  }, [])

  return { initialNodes, initialEdges, nodeTypes }
}

export default useInitState
