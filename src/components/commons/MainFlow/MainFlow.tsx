import React, { useCallback, useEffect, useRef } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Connection, addEdge, Background, Controls } from 'reactflow'
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

  useEffect(() => {
    loadAndSet()
  }, [])

  return (
    <div ref={reactFlowWrapper} style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
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
