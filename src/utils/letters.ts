/**
 * Reference
 * https://jp.piliapp.com/symbol/subscript-superscript/
 *
 */
type charCodeTranslatable2Upper = 40 | 41 | 43 | 45 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57
type charCodeTranslatable2Lower = 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57
type charCodeTranslatable2Roman = 49 | 50 | 51 | 52 | 53 | 54 | 55

const letter2upperMap: { [_ in charCodeTranslatable2Upper]: string } = {
  40: '⁽',
  41: '⁾',
  43: '⁺',
  45: '⁻',
  48: '⁰',
  49: '¹',
  50: '²',
  51: '³',
  52: '⁴',
  53: '⁵',
  54: '⁶',
  55: '⁷',
  56: '⁸',
  57: '⁹',
}

const letter2lowerMap: { [_ in charCodeTranslatable2Lower]: string } = {
  48: '₀',
  49: '₁',
  50: '₂',
  51: '₃',
  52: '₄',
  53: '₅',
  54: '₆',
  55: '₇',
  56: '₈',
  57: '₉',
}

const letter2RomanMap: { [_ in charCodeTranslatable2Roman]: string } = {
  49: 'Ⅰ',
  50: 'Ⅱ',
  51: 'Ⅲ',
  52: 'Ⅳ',
  53: 'Ⅴ',
  54: 'Ⅵ',
  55: 'Ⅶ',
}

export const lettersTranslatable2Upper = Object.keys(letter2upperMap).map((code) => String.fromCharCode(Number(code)))
export const lettersTranslatable2Lower = Object.keys(letter2lowerMap).map((code) => String.fromCharCode(Number(code)))
export const lettersTranslatable2Roman = Object.keys(letter2RomanMap).map((code) => String.fromCharCode(Number(code)))

export function transLetters2Upper(arg: string) {
  return Array.from(arg)
    .map((letter) => {
      const code = letter.charCodeAt(0)
      return letter2upperMap[code as charCodeTranslatable2Upper] || letter
    })
    .join('')
}

export function transLetters2Lower(arg: string) {
  return Array.from(arg)
    .map((letter) => {
      const code = letter.charCodeAt(0)
      return letter2lowerMap[code as charCodeTranslatable2Lower] || letter
    })
    .join('')
}

export function transLetters2Roman(arg: string) {
  return Array.from(arg)
    .map((letter) => {
      const code = letter.charCodeAt(0)
      return letter2RomanMap[code as charCodeTranslatable2Roman] || letter
    })
    .join('')
}
