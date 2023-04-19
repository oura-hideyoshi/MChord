import { Node, NodeTypes } from 'reactflow'
import ChordNode from '../components/commons/ChordNode'

function getInitState() {
  const initialNodes: Node[] = [
    { id: '1', type: 'input', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: '3', type: 'ChordNode', position: { x: 0, y: 200 }, data: { label: '3' } },
  ]
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
  const nodeTypes: NodeTypes = {
    ChordNode: ChordNode,
  }

  return { initialNodes, initialEdges, nodeTypes }
}

export default getInitState
