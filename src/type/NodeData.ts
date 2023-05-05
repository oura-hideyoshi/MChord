import { Chord } from '@tonaljs/chord'
import { Key } from '@tonaljs/key'

export type ChordNodeData = {
  chordName: Chord['symbol']
  key: Key['tonic'] | undefined
}
