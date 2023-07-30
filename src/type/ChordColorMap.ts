import { standardRomanNumerals } from './standardIntervals'

export const draftChordType = ['maj', 'min'] as const
export type draftChordType = (typeof draftChordType)[number]

export type chordColorMap = { [key in standardRomanNumerals]: { [key in draftChordType]: string } }
