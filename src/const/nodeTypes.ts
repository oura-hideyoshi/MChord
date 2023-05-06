import ChordNode from '../components/commons/ChordNode'
import TransKeyNode from '../components/commons/TransKeyNode'

export const nodeTypeNames = {
  ChordNode: 'ChordNode',
  TransKeyNode: 'TransKeyNode',
} as const

export const nodeTypes: { [key in keyof typeof nodeTypeNames]: any } = {
  ChordNode: ChordNode,
  TransKeyNode: TransKeyNode,
}
