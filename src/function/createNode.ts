import { Chord } from '@tonaljs/chord'
import generateUUID from '../utils/generateUUID'
import { Node } from 'reactflow'
import { nodeTypeNames } from '../const/nodeTypes'

export const createChordNode = (chordName: Chord['symbol']) => {
  const newNode: Node = {
    id: generateUUID(),
    type: nodeTypeNames.ChordNode,
    position: { x: 0, y: 0 },
    data: chordName,
  }
  return newNode
}
