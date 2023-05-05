import React, { useCallback, useRef, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Connection, addEdge, Background, Controls, ReactFlowInstance } from 'reactflow'
import useDrag from '../../hooks/useDrag'
import useInitState from '../../function/useInitState'

type Props = {}

const MainFlow = ({ ...props }: Props) => {
  const { initialNodes, initialEdges, nodeTypes } = useInitState()

  const reactFlowWrapper = useRef(null) as any // FIXME
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null)

  const { onDragOver, createDropFnc } = useDrag()

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onDrop = createDropFnc(reactFlowInstance, (newNode) => setNodes((nds) => nds.concat(newNode)))

  return (
    <div ref={reactFlowWrapper} style={{ height: '100%', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
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
