import { Chord } from '@tonaljs/chord'
import { Key } from '@tonaljs/key'

type MchordNodeDataBase = {
  key: Key['tonic'] | undefined
}

export interface ChordNodeData extends MchordNodeDataBase {
  chordName: Chord['symbol']
}

export interface TransKeyNodeData extends MchordNodeDataBase {}
