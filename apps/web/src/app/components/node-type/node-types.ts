import {NodeTypes} from 'reactflow';
import {NoteNode} from './note-node';

export const NODE_TYPE = {
  noteNode: 'noteNode',
} as const;

export const _nodeTypes: NodeTypes = {
  [NODE_TYPE.noteNode]: NoteNode,
};
