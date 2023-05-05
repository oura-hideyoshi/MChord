import ChordNode from '../components/commons/ChordNode'

export const nodeTypeNames = {
  ChordNode: 'ChordNode',
  KeyTransNode: 'KeyTransNode',
} as const

export const nodeTypes: { [key in keyof typeof nodeTypeNames]: any } = {
  ChordNode: ChordNode,
  KeyTransNode: undefined,
}
