'use client';

import {Note} from '@repo/ui';
import {
  Background,
  Node,
  ReactFlow,
  useEdges,
  useEdgesState,
  useNodes,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {_nodeTypes, NODE_TYPE} from './node-type';

const initialNodes: Node[] = [
  {
    id: '1',
    position: {x: 0, y: 0},
    data: {label: '1'},
    type: NODE_TYPE.noteNode,
  },
  {
    id: '2',
    position: {x: 0, y: 100},
    data: {label: '2'},
    type: NODE_TYPE.noteNode,
  },
];
const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

const Flow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="size-full">
      <ReactFlow
        nodeTypes={_nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flow;
