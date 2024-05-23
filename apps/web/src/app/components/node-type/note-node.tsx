import {Note} from '@repo/ui';
import {Handle, NodeProps, NodeToolbar, Position} from 'reactflow';

export type NoteNodeData = {
  label?: string;
};

type Props = NodeProps<NoteNodeData>;

export const NoteNode: React.FC<Props> = props => {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      <Note>{props.data.label}</Note>
      <Handle type="source" position={Position.Right} />
      <NodeToolbar isVisible={props.selected} position={Position.Right}>
        <button className="bg-white p-2 rounded-md">+</button>
      </NodeToolbar>
    </>
  );
};
