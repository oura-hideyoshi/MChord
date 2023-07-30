import { draftChordType } from '@/type/ChordColorMap'
import { standardDegrees, standardRomanNumerals } from '@/type/standardIntervals'

export function isStandardDegrees(input: string): input is standardDegrees {
  return standardDegrees.includes(input as standardDegrees)
}

export function isStandardRomanNumerals(input: string): input is standardRomanNumerals {
  return standardRomanNumerals.includes(input as standardRomanNumerals)
}

export function isDraftChordType(input: string): input is draftChordType {
  return draftChordType.includes(input as draftChordType)
}
