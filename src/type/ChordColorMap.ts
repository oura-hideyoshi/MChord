import { romanNumerals } from './interval'

export const draftChordType = ['maj', 'min'] as const
export type draftChordType = (typeof draftChordType)[number]

export type chordColorMap = { [key in romanNumerals]: { [key in draftChordType]: string } }
