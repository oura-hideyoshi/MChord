export const Roman = {
  I: 'Ⅰ',
  II: 'Ⅱ',
  III: 'Ⅲ',
  IV: 'Ⅳ',
  V: 'Ⅴ',
  VI: 'Ⅵ',
  VII: 'Ⅶ',
  i: 'ⅰ',
  ii: 'ⅱ',
  iii: 'ⅲ',
  iv: 'ⅳ',
  v: 'ⅴ',
  vi: 'ⅵ',
  vii: 'ⅶ',
} as const

export const Accidental = {
  '#': '♯',
  b: '♭',
}

export type AccidentalKey = keyof typeof Accidental
