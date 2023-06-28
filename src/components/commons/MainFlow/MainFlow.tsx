import React, { useCallback, useEffect, useRef } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Connection,
  addEdge,
  Background,
  Controls,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
  OnNodesDelete,
} from 'reactflow'
import useDrag from '../../../hooks/useDrag'
import useInitState from '../../../function/useInitState'
import { useStorage } from '@/hooks/useStorage'

type Props = {}

const MainFlow = ({ ...props }: Props) => {
  const { initialNodes, initialEdges, nodeTypes } = useInitState()
  const { loadAndSet } = useStorage()

  const reactFlowWrapper = useRef(null) as any // FIXME
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const { onDragOver } = useDrag()

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds))
      console.log('params', params)
    },
    [setEdges]
  )

  const onNodesDelete: OnNodesDelete = useCallback(
    (deleted) => {
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges)
          const outgoers = getOutgoers(node, nodes, edges)
          const connectedEdges = getConnectedEdges([node], edges)

          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge))

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
          )

          return [...remainingEdges, ...createdEdges]
        }, edges)
      )
    },
    [setEdges, edges, nodes]
  )

  useEffect(() => {
    loadAndSet()
  }, [])

  return (
    <div ref={reactFlowWrapper} style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodesDelete={onNodesDelete}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onNodeDoubleClick={(e, n) => console.log('n', n)}
        onEdgeDoubleClick={(e, edge) => console.log('edge', edge)}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default MainFlow
