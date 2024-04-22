import { Roman } from '@/const/charCode'
import { standardRomanNumerals } from '@/type/standardIntervals'

/**
 * IIIm7 -> Ⅲm7
 */
export function convertToRoman(input: string): string {
  // キーを長さの降順でソート（長いものから順に前方一致をチェック）
  const romanKeys = Object.keys(Roman) as unknown as (keyof typeof Roman)[]
  const keys = romanKeys.sort((a, b) => b.length - a.length)

  for (const key of keys) {
    if (input.startsWith(key)) {
      return Roman[key] + convertToRoman(input.slice(key.length))
    }
  }

  return input
}

const romanToStandardRomanMap: { [key in string]: standardRomanNumerals } = {
  I: 'I',
  II: 'II',
  III: 'III',
  IV: 'IV',
  V: 'V',
  VI: 'VI',
  VII: 'VII',
  Ib: 'VII',
  IIb: 'ii',
  IIIb: 'iii',
  IVb: 'III',
  Vb: 'IV#',
  VIb: 'vi',
  VIIb: 'vii',
  bI: 'VII',
  bII: 'ii',
  bIII: 'iii',
  bIV: 'III',
  bV: 'IV#',
  bVI: 'vi',
  bVII: 'vii',
  'I#': 'ii',
  'II#': 'iii',
  'III#': 'IV',
  'IV#': 'IV#',
  'V#': 'vi',
  'VI#': 'vii',
  'VII#': 'I',
  '#I': 'ii',
  '#II': 'iii',
  '#III': 'IV',
  '#IV': 'IV#',
  '#V': 'vi',
  '#VI': 'vii',
  '#VII': 'I',
}

export function convertToStandardRoman(input: string): standardRomanNumerals | undefined {
  if (Object.keys(romanToStandardRomanMap).includes(input)) {
    return romanToStandardRomanMap[input]
  } else undefined
}
